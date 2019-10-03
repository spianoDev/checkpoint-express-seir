const express = require("express");
const router = express.Router();

const User = require('../models/User');

router.get("/", (req, res) => {
    User.find({}).then(allUsers => res.json(allUsers));
});
router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(user));
});
module.exports = router;