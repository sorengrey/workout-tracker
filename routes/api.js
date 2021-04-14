const router = require("express").Router();
const Workout = require("../models/workout.js");

// this is supposed to get the /workout page
router.get("/api/transaction", (req, res) => {
    Transaction.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// this is supposed to post the workout info
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;