const User = require("../models/user");
const jwt = require("jsonwebtoken"); //to generate signed token
const expressJwt = require("express-jwt"); //for authorization check

exports.signup = (req, res) => {
	//console.log(req.body);
	const user = new User(req.body);
	user.save((err, user) => {
		if (err) {
			return res.status(400).json({
				err,
			});
		}
		res.json({
			user,
		});
	});
};

exports.signin = (req, res) => {
	//console.log(req.body);
	//fing the user based on email
	const { email, password } = req.body;
	User.findOne({ email }, (err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: "User with that email doesnt exist. Please signup",
			});
		}
		//if user is found make sure the email and password both matches
		//create authenticate method in user model for this
		if (!user.authenticate(password)) {
			return res.status(401).json({
				error: "Email and password dont match",
			});
		}
		//generate a signed token with userId and secret
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
		//presist the token as t in cookie with expiry date
		res.cookie("t", token, { expire: new Date() + 9999 }); //seconds

		const { _id, name, email } = user;
		return res.json({ token, user: { _id, name, email } });
	});
};

exports.signout = (req, res) => {
	res.clearCookie("t");
	res.json({ message: "SignOut success" });
};
