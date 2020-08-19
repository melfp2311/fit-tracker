const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    console.log("Hellooo")
    db.Workout.find({})
        .then(dbWO => {
        console.log("db", dbWO)
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    console.log("Hi")
    db.Workout.create(body).then(dbWO => {
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log("request", req.body)
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push:  { allExercises: req.body}},
        { new: true}
    ).then(dbWO => {
        console.log("found", dbWO)
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.get("/api/workouts/range", (req, res) => {
    console.log("Hi")
    db.Workout.find({})
        .then(dbWO => {
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;