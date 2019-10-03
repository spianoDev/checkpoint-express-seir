const express = require("express");
const router = express.Router();

const Note = require("../models/Note");

router.get("/", (req, res) => {
    Note.find({}).then(allNotes = res.json(allNotes));
});

module.exports = router;