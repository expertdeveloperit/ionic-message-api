var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    
    name        : String,
    mobile      : { type: Number, index: true, unique: true},
    email       : String,
    password    : String,
    otp         : Number  
    
},	{timestamps: true});

var Users= mongoose.model('users',userSchema);
module.exports = Users;