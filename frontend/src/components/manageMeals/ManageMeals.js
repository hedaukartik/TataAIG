import React, { useState } from "react";
import MealForm from "./MealForm";

const ManageMeals = ({ meal }) => {
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
		mealRequest.updatedDate = startDate;
		const sendMealRequest = Object.assign({}, mealRequest);
		console.log(sendMealRequest);
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

export default ManageMeals;
