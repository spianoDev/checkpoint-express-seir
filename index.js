const express = require('express');
const app = express();
const noteController = require('');
const userController = require('');
const parser = require('body-parser');

app.use(parser.urlencoded({ extended:true }));
app.use("/", noteController);
app.get("/", (req, res) => {
    res.redirect("/");
});


app.listen(3000, () => console.log('app is running on port 3000'));

// DO NOT REMOVE THIS LINE:
module.exports = app;
