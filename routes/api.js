const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");


// gets the /exercise page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "./../public/exercise.html"))
})

// gets the api/exercise page
router.get("/api/exercise", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// gets the /stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "./../public/stats.html"))
})

// gets the api/stats page
router.get("/api/stats", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//gets the range section of the /stats page
router.get("/api/stats/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// supposed to post a workout to api/stats - does not work yet 
router.post("/api/stats", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// supposed to post the workouts in bulk to api/stats - does not work yet 
router.post("/api/stats/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;