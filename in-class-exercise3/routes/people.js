const express = require("express");
const router = express.Router();
const data = require("../data/people");
const peopleData = data.people;



router.get("/", async (req, res) => {
    try {
    constpeople=await peopleData.getPeople();
    res.json(people);
    } catch (e) {
    res.status(404).json({ message:"not found!" });
    }
    });

    router.get("/:id", async (req, res) => {
        try {
        constperson=await peopleData.getPersonById(req.params.id);
        res.json(person);
        } catch (e) {
        res.status(404).json({ message:"not found!" });
        }
        });

module.exports = router;