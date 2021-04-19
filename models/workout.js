const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "What kind of workout was it?",
      },
      name: {
        type: String,
        required: "Enter a name for this workout",
      },
      duration: {
        type: Number,
        required: "How long was your workout?",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;