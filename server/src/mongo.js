const mongoose = require("mongoose");
require("dotenv").config();

const CONNECT_URL = process.env.CONN_URL;

mongoose
	.connect(CONNECT_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => console.log(err.reason));

const workoutSchema = new mongoose.Schema({
	title: String,
	description: String,
	weight: Number,
	reps: Number
});

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports.WorkoutModel = WorkoutModel;
