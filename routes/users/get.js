var responseObject = require('../../common/commonFunctions');
var mongoose = require('mongoose');
var Users = require('../../models/users');

let getUsers = async function (req, res, next) {
    try {
        let searchObj = {};
        if(req.params.mobile)
            searchObj['mobile'] = req.params.mobile;
        let users = await Users.find(searchObj);
        res.send(responseObject(200, "users found", users));
    }catch(e){
        console.log(e, "error in get users")
        res.send(responseObject(500, "error while fetching users", null));
    }
    
}
module.exports = {
    getUsers: getUsers
};