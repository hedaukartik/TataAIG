import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import SignUp from "./components/signup/SignUp";
import "./App.scss";

function App() {
	return (
		<div className="container-fuild">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;
