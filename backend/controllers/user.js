const User = require("../models/user");
const Meal = require("../models/meal");
const mongoose = require("mongoose");
const moment = require("moment");

const castIdToObjectId = (id) => mongoose.Types.ObjectId(id);

exports.userById = (req, res, next, id) => {
	User.findById(id).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: "User not found",
			});
		}
		req.profile = user;
		next();
	});
};

exports.addMealForUser = (req, res) => {
	const meal = new Meal(req.body);
	const userId = req.params.userId;
	console.log("updatedDate", typeof req.body.updatedDate);
	const ISODate = moment(req.body.updatedDate).format(
		"YYYY-MM-DD[T00:00:00.000Z]"
	);
	console.log(ISODate);
	meal.user = userId;
	meal.updatedDate = ISODate;
	console.log(meal);
	meal.save((err, meal) => {
		if (err) {
			return res.status(400).json({
				err,
			});
		}
		return res.status(200).json({
			message: "Success",
		});
		// const mealId = meal._id;
		// Meal.findByIdAndUpdate(
		// 	mealId,
		// 	{ user: userId },
		// 	{ new: true, useFindAndModify: false },
		// 	(err, meal) => {
		// 		if (err) {
		// 			return res.status(400).json({
		// 				err,
		// 			});
		// 		}
		// 		res.json({
		// 			meal,
		// 		});
		// 	}
		// );
	});
};
exports.updateMealForUser = (req, res) => {
	const meal = req.body;
	const mealId = req.params.mealId;
	if (req.body.updatedDate) {
		meal.updatedDate = new Date(
			moment(req.body.updatedDate).format("YYYY-MM-DD[T00:00:00.000Z]")
		);
	}
	Meal.findByIdAndUpdate(
		mealId,
		{ $set: meal },
		{ new: true, useFindAndModify: false },
		(err, meal) => {
			if (err) {
				return res.status(400).json({
					err,
				});
			}
			res.json({
				meal,
			});
		}
	);
};

exports.getAllMealsForUser = (req, res) => {
	console.log(req.params.userId);
	let query = {};
	query.user = req.params.userId;
	if (req.query.requestDate) {
		console.log("requestDate", typeof req.query.requestDate);
		const ISODate = moment(parseInt(req.query.requestDate)).format(
			"YYYY-MM-DD[T00:00:00.000Z]"
		);
		console.log("ISODate", ISODate);
		query.updatedDate = ISODate;
	}
	console.log(query);
	Meal.find(query, (err, meal) => {
		if (err) {
			return res.status(400).json({
				err,
			});
		}
		res.json({
			meal,
		});
	});
};

exports.getAggregatedCaloriesByDate = (req, res) => {
	const userId = castIdToObjectId(req.params.userId);
	Meal.aggregate(
		[
			{
				$match: { user: userId },
			},
			{
				$group: {
					_id: {
						$dateToString: {
							format: "%Y-%m-%d",
							date: "$updatedDate",
						},
					},
					calories: { $sum: "$calories" },
				},
			},
		],
		(err, caloriesByDate) => {
			if (err) {
				return res.status(400).json({
					err,
				});
			}
			res.json({
				caloriesByDate,
			});
		}
	);
};

exports.deleteMealForUser = (req, res) => {
	console.log("userId", req.params.userId);
	console.log("mealId", req.params.mealId);
	Meal.deleteOne({ _id: req.params.mealId }, (err) => {
		if (err) {
			return res.status(400).json({
				err,
			});
		}
		res.json({ message: "Meal deleted successfully." });
	});
};
