import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAggregatedCaloriesByDate } from "../../util/APIUtils";
import "./MealPage.styles.scss";

const MealsPage = ({ user }) => {
	const [addMealPage, setAddMealPage] = useState(false);
	const [highlightDates, setHighlightDates] = useState([]);
	const [startDate, setStartDate] = useState(new Date());
	const highlightDatesWithCaloriesValueFunction = (response) => {
		console.log(response);
		let gt = [];
		let lt = [];
		for (let i = 0; i < response.length; i++) {
			if (response[i].calories >= 700) {
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
		getAggregatedCaloriesByDate(user._id)
			.then((res) => {
				console.log(res.caloriesByDate);
				setHighlightDates(
					highlightDatesWithCaloriesValueFunction(res.caloriesByDate)
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);

	return (
		<>
			<div className="container">
				{addMealPage && <Redirect to="/meal" />}
				<h2>Your Meals</h2>
				<button
					style={{ marginBottom: 20 }}
					className="btn btn-primary"
					onClick={() => setAddMealPage(true)}
				>
					Add Meal
				</button>
				<div className="row">
					<div className="col-lg-4 col-sm-4 col-md-4">
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							highlightDates={highlightDates}
							placeholderText="This highlight two ranges with custom classes"
							inline
						/>
						{console.log(highlightDates)}
					</div>
					<div className="col-lg-8 col-sm-8 col-md-8"></div>
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
