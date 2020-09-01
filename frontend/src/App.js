import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import "./App.scss";

function App() {
	return (
		<div className="container-fuild">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
