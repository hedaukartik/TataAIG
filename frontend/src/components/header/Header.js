import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => {
	return (
		<div className="header">
			<nav className="navbar navbar-expand-lg">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							HOME
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/meals">
							MEALS
						</Link>
					</li>
				</ul>
				<ul className="navbar-nav ml-auto">
					{false ? (
						<li className="nav-item">
							<Link className="nav-link">
								<div className="nav-link">SIGN OUT</div>
							</Link>
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
			</nav>
		</div>
	);
};

export default Header;
