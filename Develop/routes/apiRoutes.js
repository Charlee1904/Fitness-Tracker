const Workout = require("../models/workout.js")
const router = require("express").Router()


router.post("/api/workouts", ({body}, res) => {
  Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("PARAMS", body, params);

  Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({date:-1})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(err);
    });
});


module.exports = router;