const express = require('express');
const router = express.Router();
const data = require("../data");
const fd = data.fd;

router.get("/", (req, res) => {
    console.log("in about");
    //res.send("hi");
    //console.log(fd);
    fd.getFileAsJSON("about.json").then((about) => {

        console.log(about);
        res.json(about);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
    });
});

module.exports = router;