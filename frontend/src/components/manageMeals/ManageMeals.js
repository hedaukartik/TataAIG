import React, { useState } from "react";
import MealForm from "./MealForm";
import { connect } from "react-redux";
import { addMeal } from "../../util/APIUtils";
import Alert from "react-s-alert";

const ManageMeals = ({ meal, user }) => {
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
	};

	return (
		<MealForm
			mealRequest={mealRequest}
			onChange={handleChange}
			onSave={handleSave}
			setStartDate={setStartDate}
			startDate={startDate}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, null)(ManageMeals);
