import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, user }) => (
	<Route
		render={(props) =>
			user ? (
				<Component />
			) : (
				<Redirect
					to={{
						pathname: "/signin",
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
);

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
