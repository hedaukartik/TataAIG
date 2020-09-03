import React from "react";
import { cleanup, render } from "@testing-library/react";
import MealList from "./MealList";

afterEach(cleanup); //we can centralize this

function renderMealList(args) {
	const defaultProps = {
		meals: [],
		startDate: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate()
		),
		onDeleteClick: () => {},
	};

	const props = { ...defaultProps, ...args };
	return render(<MealList {...props} />);
}

it("should render Meal Name in header of table", () => {
	const { getByText } = renderMealList();
	getByText("Meal Name");
});
