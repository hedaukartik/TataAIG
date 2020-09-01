import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.styles.scss";
import { signout } from "../../util/APIUtils";
import Alert from "react-s-alert";
import { ACCESS_TOKEN } from "../../constants";
import { removeUser } from "../../redux/actions/userActions";

const Header = ({ user, removeUser, history }) => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	const logoutCurrentUser = () => {
		signout()
			.then((response) => {
				localStorage.removeItem(ACCESS_TOKEN);
				removeUser();
				Alert.success("You are successfully logged out!");
				history.push("/");
			})
			.catch((error) => {
				Alert.error("Something went wrong. Please try again.");
			});
	};

	return (
		<div className="header">
			<nav className="navbar navbar-expand-sm navbar-light">
				<Link className="navbar-brand" to="/">
					Food Court
				</Link>
				<button
					className="custom-toggler navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample09"
					aria-controls="navbarsExample09"
					aria-expanded={!isNavCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`${
						isNavCollapsed ? "collapse" : ""
					} navbar-collapse`}
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/meals">
								MEALS
							</Link>
						</li>
						{user ? (
							<li className="nav-item">
								<span
									className="nav-link"
									onClick={logoutCurrentUser}
								>
									SIGN OUT
								</span>
							</li>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/signin">
										SIGN IN
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/signup">
										SIGN UP
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => ({
	removeUser: () => dispatch(removeUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
