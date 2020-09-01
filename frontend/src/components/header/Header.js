import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<div className="header">
			<nav className="navbar navbar-expand-sm navbar-light">
				<Link className="navbar-brand" to="/">
					Food Court
				</Link>
				<button
					class="custom-toggler navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample09"
					aria-controls="navbarsExample09"
					aria-expanded={!isNavCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}
				>
					<span class="navbar-toggler-icon"></span>
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
				</div>
			</nav>
		</div>
	);
};

export default Header;
