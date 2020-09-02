import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MealForm = ({
	mealRequest,
	onSave,
	onChange,
	setStartDate,
	startDate,
}) => (
	<div className="container">
		<form onSubmit={onSave}>
			<div className="form-group row">
				<label htmlFor="meal" className="col-sm-2 col-form-label">
					Meal
				</label>
				<div className="col-sm-10">
					<input
						type="text"
						className="form-control"
						name="name"
						placeholder="Meal"
						value={mealRequest.name}
						onChange={onChange}
					/>
				</div>
			</div>
			<div className="form-group row">
				<label htmlFor="calories" className="col-sm-2 col-form-label">
					Calories
				</label>
				<div className="col-sm-10">
					<input
						type="text"
						className="form-control"
						name="calories"
						placeholder="Calories"
						value={mealRequest.calories}
						onChange={onChange}
					/>
				</div>
			</div>
			<div className="form-group row">
				<label htmlFor="calories" className="col-sm-2 col-form-label">
					Select Date
				</label>
				<div className="col-sm-10">
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
					/>
				</div>
			</div>
			<button type="submit" className="btn btn-primary ">
				Save
			</button>
		</form>
	</div>
);

export default MealForm;
