import React, { useState, useEffect } from "react";
import MealList from "../mealList/MealList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
	getAggregatedCaloriesByDate,
	getAllMeals,
	deleteMeal,
} from "../../util/APIUtils";
import "./MealPage.styles.scss";

const MealsPage = ({ user }) => {
	const [addMealPage, setAddMealPage] = useState(false);
	const [highlightDates, setHighlightDates] = useState([]);
	const [mealList, setMealList] = useState([]);
	const [startDate, setStartDate] = useState(
		new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate()
		)
	);
	const highlightDatesWithCaloriesValueFunction = (response) => {
		console.log(response);
		let gt = [];
		let lt = [];
		for (let i = 0; i < response.length; i++) {
			if (response[i].calories >= 2000) {
				console.log(response[i].calories);
				console.log(response[i]._id);
				gt.push(new Date(response[i]._id));
			} else {
				lt.push(new Date(response[i]._id));
			}
		}
		const highlightDates = [
			{
				"react-datepicker__day--highlighted-custom-1": gt,
			},
			{
				"react-datepicker__day--highlighted": lt,
			},
		];
		return highlightDates;
	};

	useEffect(() => {
		console.log("useEffect");
		if (user) {
			getAggregatedCaloriesByDate(user._id)
				.then((res) => {
					console.log(res.caloriesByDate);
					setHighlightDates(
						highlightDatesWithCaloriesValueFunction(
							res.caloriesByDate
						)
					);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [user]);

	useEffect(() => {
		console.log("useEffect2");
		if (user) {
			getAllMeals(user._id, startDate.getTime())
				.then((res) => {
					setMealList(res.meal);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [user, startDate]);

	const handleDeleteMeal = (meal) => {
		deleteMeal(user._id, meal._id)
			.then((res) => {
				setMealList(
					mealList.filter((mealLi) => mealLi._id !== meal._id)
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="container">
				{addMealPage && <Redirect to="/meal" />}
				<h5 style={{ marginBottom: 30 }}>Meals Daily</h5>

				<div className="row">
					<div className="col-lg-4 col-sm-4 col-md-4 text-center">
						<div>
							<span
								style={{
									borderRadius: "0.3rem",
									backgroundColor: "red",
									color: "#fff",
								}}
							>
								Red
							</span>
							- High Calories/day
						</div>
						<div>
							<span
								style={{
									borderRadius: "0.3rem",
									backgroundColor: "#3dcc4a",
									color: "#fff",
								}}
							>
								Green
							</span>
							- Low Calories/day
						</div>
						<div style={{ marginBottom: 30 }}>
							Limit: 2000 Calories
						</div>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							highlightDates={highlightDates}
							placeholderText="This highlight two ranges with custom classes"
							inline
						/>
					</div>
					<div className="col-lg-8 col-sm-8 col-md-8 text-center">
						{console.log(mealList)}
						<button
							style={{ marginBottom: 20 }}
							className="btn btn-primary"
							onClick={() => setAddMealPage(true)}
						>
							Add Meal
						</button>
						<MealList
							meals={mealList}
							startDate={startDate}
							onDeleteClick={handleDeleteMeal}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, null)(MealsPage);
