const express = require('express');
const router = express.Router();
const data = require("../data");
const fd = data.fd;

router.get("/", (req, res) => {
    fd.getFileAsJSON("education.json").then((education) => {
        res.json(education);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
    });
});

module.exports = router;