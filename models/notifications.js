var mongoose = require('mongoose');
var notifcaionsSchema = new mongoose.Schema({

   messageId        : { type: mongoose.Schema.Types.ObjectId },
   status           : { type: String, default: "initial"}
    
},	{timestamps: true});

var Notifications= mongoose.model('notifications',notifcaionsSchema);
module.exports = Notifications;