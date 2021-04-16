const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");


// gets the /exercise page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "./../public/exercise.html"))
})

// gets the /stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "./../public/stats.html"))
})

// gets the api/workouts page
router.get("/api/workouts", (req, res) => {
  Workout.find({})
      .then(workoutDB => {
          res.json(workoutDB);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});

//gets the range section of the /workouts page
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(10)
    .then(workoutDB => {
      res.json(workoutDB);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// posts the workouts
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(workoutDB => {
      res.json(workoutDB);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// finds workouts by their id and updates them
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id,
      { $push: { exercises: body } }, { new: true })
      .then(workoutDB => {
          res.json(workoutDB);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});

// deletes workouts by id
router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndRemove(body.id)
      .then(() => {
          res.json(true);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});


module.exports = router;