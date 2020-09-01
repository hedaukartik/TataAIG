import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { signup } from "../../util/APIUtils";

const SignUp = ({ history }) => {
	const [request, setRequest] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setRequest({ ...request, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const signUpRequest = Object.assign({}, request);

		signup(signUpRequest)
			.then((response) => {
				console.log(
					"You are successfully registered. Please Sign In to continue."
				);
				history.push("/signin");
			})
			.catch((error) => {
				console.log("Something went wrong. Please try again.");
			});
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-group row">
					<label for="name" className="col-sm-2 col-form-label">
						Name
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							name="name"
							value={request.name}
							onChange={handleInputChange}
							className="form-control"
							placeholder="Name"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label for="email" className="col-sm-2 col-form-label">
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
					<label for="password" className="col-sm-2 col-form-label">
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
					Sign in
				</button>
			</form>
		</div>
	);
};

export default withRouter(SignUp);
