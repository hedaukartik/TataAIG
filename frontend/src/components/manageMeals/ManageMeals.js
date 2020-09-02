import React, { useState, useEffect } from "react";
import MealForm from "./MealForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addMeal, updateMeal } from "../../util/APIUtils";
import Alert from "react-s-alert";

const ManageMeals = ({ meal, user, history }) => {
	const [startDate, setStartDate] = useState(
		new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate()
		)
	);
	const [mealRequest, setMealRequest] = useState({
		name: "",
		calories: "",
	});

	const [mealId, setMealId] = useState();

	useEffect(() => {
		console.log("useEffect ManageMeals");
		console.log(history.location.mealRequest);
		if (history.location && history.location.mealRequest) {
			const selectedMeal = history.location.mealRequest;
			setMealRequest({
				name: selectedMeal.name,
				calories: selectedMeal.calories,
			});
			setStartDate(new Date(selectedMeal.updatedDate));
			setMealId(selectedMeal._id);
		}
	}, [history.location]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMealRequest({ ...mealRequest, [name]: value });
	};

	const handleSave = (e) => {
		e.preventDefault();
		mealRequest.updatedDate = startDate.getTime();
		mealRequest.calories = parseInt(mealRequest.calories);
		const sendMealRequest = Object.assign({}, mealRequest);
		console.log(sendMealRequest);
		if (mealId) {
			updateMeal(sendMealRequest, user._id, mealId)
				.then((response) => {
					Alert.success("Meal updated successfully!");
					setMealRequest({
						name: "",
						calories: "",
					});
					history.push("/meals");
				})
				.catch((error) => {
					Alert.error("Something went wrong. Please try again.");
				});
		} else {
			addMeal(sendMealRequest, user._id)
				.then((response) => {
					Alert.success("Meal added successfully!");
					setMealRequest({
						name: "",
						calories: "",
					});
				})
				.catch((error) => {
					Alert.error("Something went wrong. Please try again.");
				});
		}
	};

	return (
		<MealForm
			mealRequest={mealRequest}
			onChange={handleChange}
			onSave={handleSave}
			setStartDate={setStartDate}
			startDate={startDate}
			mealId={mealId}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default withRouter(connect(mapStateToProps, null)(ManageMeals));
