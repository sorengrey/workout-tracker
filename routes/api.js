const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "./../public/exercise.html"))
})

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "./../public/stats.html"))
})

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