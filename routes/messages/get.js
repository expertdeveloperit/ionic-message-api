var responseObject = require('../../common/commonFunctions');
var mongoose = require('mongoose');
var Messages = require('../../models/message');
var responseObject = require('../../common/commonFunctions');

let getMessages = async function (req, res) {
    try {
        let searchObj = {};
        if(req.query.sender)
            searchObj['sender'] = req.query.sender;
        if(req.query.receiver)
            searchObj['receiver'] = req.query.receiver;
        if(req.params.messageId)
            searchObj['_id'] = mongoose.Types.ObjectId(req.params.messageId);

        let messaged = await Messages.find(searchObj);
        
        res.send(responseObject(200, "messaged found", messaged));
    
    }catch(e){
        console.log(e, "error in get messages")
        res.send(responseObject(500, "error while fetching messages", null));
    }
}

module.exports = {
    getMessages: getMessages
};