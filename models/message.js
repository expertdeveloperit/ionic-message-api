var mongoose = require('mongoose');
var messageSchema = new mongoose.Schema({

    sender        : { type: Number },
    receiver      : { type: Number },
    message         : String
    
},	{timestamps: true});

var Messages= mongoose.model('messages',messageSchema);
module.exports = Messages;