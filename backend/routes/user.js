const express = require("express");
const router = express.Router();

const { requireSignIn, isAuth } = require("../controllers/auth");
const {
	userById,
	addMealForUser,
	updateMealForUser,
	getAllMealsForUser,
	deleteMealForUser,
	getAggregatedCaloriesByDate,
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
router.get("/user/:userId/allMeals", requireSignIn, isAuth, getAllMealsForUser);
router.get(
	"/user/:userId/aggreagateMeals",
	requireSignIn,
	isAuth,
	getAggregatedCaloriesByDate
);
router.delete(
	"/user/:userId/meal/:mealId/deleteMeal",
	requireSignIn,
	isAuth,
	deleteMealForUser
);

router.param("userId", userById);

module.exports = router;
