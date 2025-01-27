const express = require('express');
const app = express();
const noteController = require('./controllers/notes');
const userController = require('./controllers/users');
const parser = require('body-parser');

app.use(parser.urlencoded({ extended:true }));
app.use("/notes", noteController);
app.use("/users", userController);

app.get("/", (req, res) => {
    res.redirect("/notes");
});


app.listen(3000, () => console.log('app is running on port 3000'));

// DO NOT REMOVE THIS LINE:
module.exports = app;
