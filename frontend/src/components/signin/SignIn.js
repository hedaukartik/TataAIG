import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { signin } from "../../util/APIUtils";
import Alert from "react-s-alert";
import { ACCESS_TOKEN } from "../../constants";

const SignIn = ({ history }) => {
	const [request, setRequest] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setRequest({ ...request, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const loginRequest = Object.assign({}, request);

		signin(loginRequest)
			.then((response) => {
				localStorage.setItem(ACCESS_TOKEN, response.token);
				Alert.success("You are successfully logged in!");
				history.push("/");
			})
			.catch((error) => {
				Alert.error("Something went wrong. Please try again.");
			});
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-group row">
					<label htmlFor="email" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Email"
							value={request.email}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="password"
						className="col-sm-2 col-form-label"
					>
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							name="password"
							value={request.password}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary ">
					Sign In
				</button>
			</form>
		</div>
	);
};

export default withRouter(SignIn);
