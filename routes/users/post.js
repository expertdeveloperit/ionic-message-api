var responseObject  = require('../../common/commonFunctions');
var mongoose        = require('mongoose');
var bcrypt          = require('bcrypt');
var Users           = require('../../models/users');

let sveUser = async function (req, res, next) {
    try {
        let tempObj = new Users(req.body);
        let plainPassword = 12345;
        let saltRounds = 10;
        let hash = await bcrypt.hash(plainPassword, saltRounds);
        tempObj['password'] = hash;
        let newUser = await tempObj.save()
        res.send(responseObject(200, "User saved", newUser));
        
    }catch(e){
        console.log(e, "error while saving user")
        res.send(responseObject(500, "error while saving users", null));
    }
    
}
module.exports = {
    saveUser: saveUser
};