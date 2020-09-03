import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import MealsPage from "./components/meals/MealsPage";
import ManageMeals from "./components/manageMeals/ManageMeals";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import "./App.scss";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

function App() {
	return (
		<div className="container-fuild">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />
				<PrivateRoute path="/meals" component={MealsPage} />
				<PrivateRoute path="/meal" component={ManageMeals} />
				<PrivateRoute path="/meal/:mealId" component={ManageMeals} />
			</Switch>
			<Alert
				stack={{ limit: 3 }}
				timeout={3000}
				position="top-right"
				effect="slide"
				offset={65}
			/>
		</div>
	);
}

export default App;
