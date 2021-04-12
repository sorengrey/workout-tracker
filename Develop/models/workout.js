const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for this workout"
  },
  type: {
    type: Number,
    required: "What kind of workout was it?"
  },
  weight: {
    type: Number,
    required: "How much weight did you use?",
    default: 0
  },
  sets: {
    type: Number,
    required: "How many sets did you do?",
    default: 0
  },
  reps: {
    type: Number,
    required: "How many reps did you do?",
    default: 0
  },
  duration: {
    type: String,
    trim: true,
    required: "How long was your workout?"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;