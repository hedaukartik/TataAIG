import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const HomePage = ({ user }) => {
	return (
		<div className="jumbotron">
			<h1>Welcome to your meal analysis</h1>
			{user ? (
				<Link to="meals">Click here to see your meals</Link>
			) : (
				<Link to="signup">Want your meal analysis, sign up!!! </Link>
			)}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps, null)(HomePage);
