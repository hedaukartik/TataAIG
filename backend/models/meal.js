const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
	{
		name: String,
		calories: Number,
		updatedDate: { type: Date, default: Date.now },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Meal", mealSchema);
