const express = require('express');
const router = express.Router();
const data = require("../data");
const fd = data.fd;

router.get("/", (req, res) => {
    fd.getFileAsJSON("story.json").then((story) => {
        res.json(story);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
    });
});

module.exports = router;