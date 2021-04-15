const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
},
  exercises: [{
  type: {
    type: Number,
    required: "What kind of workout was it?"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for this workout"
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
  duration: {
    type: Number,
  }
}]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;