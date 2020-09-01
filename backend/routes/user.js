const express = require("express");
const router = express.Router();

const { requireSignIn, isAuth } = require("../controllers/auth");
const {
	userById,
	addMealForUser,
	updateMealForUser,
} = require("../controllers/user");

router.get("/secret/:userId", requireSignIn, isAuth, (req, res) => {
	res.json({
		user: req.profile,
	});
});
router.post("/user/:userId/addMeal", requireSignIn, isAuth, addMealForUser);
router.post(
	"/user/:userId/meal/:mealId/updateMeal",
	requireSignIn,
	isAuth,
	updateMealForUser
);

router.param("userId", userById);

module.exports = router;
