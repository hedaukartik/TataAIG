const User = require("../models/user");
const Meal = require("../models/meal");

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
	meal.user = userId;
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
