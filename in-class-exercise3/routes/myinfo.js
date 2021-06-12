const express = require("express");
const router = express.Router();
const data = require("../data/people");



const myInfo = { "firstName": "Robert"}

router.get("/", async (req, res) => {

res.json(myInfo)

});

module.exports = {
    router
}