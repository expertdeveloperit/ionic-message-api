var express         = require('express');
var path            = require('path');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');

var app             = express();
var index           = require('./routes/index');
var users           = require('./routes/users');
var messages        = require('./routes/messages');

// Connecting to db
mongoose.connect("mongodb://localhost:27017/messagesdb", () =>{
    console.log("Connected with db");
})

// using route middlewares
app.use('/', index);
app.use('users', users);
app.use('messages', messages)
// app.use('notifications', )
app.all('*', (req, res) => {
    res.status(404).send("You are lost.");
})
app.listen(3000, () => {
    console.log("Server started running");
})