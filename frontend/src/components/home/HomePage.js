import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="jumbotron">
			<h1>Welcome to your meal analysis</h1>
			<Link to="signup">Want your meal analysis, sign up!!! </Link>
			<Link to="meals">Click here to see your meals</Link>
		</div>
	);
};

export default HomePage;
