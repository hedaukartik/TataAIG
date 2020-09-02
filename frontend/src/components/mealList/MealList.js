import React from "react";
import moment from "moment";

const MealList = ({ meals, startDate }) => {
	const formatedDate = moment(startDate).format("MMM Do YY");
	return (
		<>
			<h5>{`Meals on ${formatedDate}`}</h5>
			<table className="table">
				<thead>
					<tr>
						<th>Meal Name</th>
						<th>Calories</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{meals.map((meal) => {
						return (
							<tr key={meal._id}>
								<td>{meal.name}</td>
								<td>{meal.calories}</td>
								<td>
									<button className="btn btn-outline-danger">
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default MealList;
