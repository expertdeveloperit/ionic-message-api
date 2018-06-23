var responseObject = require('../../common/commonFunctions');
var mongoose = require('mongoose');
var Messages = require('../../models/message');
var responseObject = require('../../common/commonFunctions');

let saveMessages = async function(req, res){
    try{
        // expected body to contain: sender, receiverand message
        let newMessage = await Messages.create(req.body)
        res.send(responseObject(200, "message saved", newMessage));
    }catch(e){
        console.log(e, "error while saving messages");
        res.send(responseObject(500, "error while saving messages", null));
    }
}
module.exports = {
    saveMessage: saveMessage
};