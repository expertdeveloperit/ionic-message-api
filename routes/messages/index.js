var express     = require('express');
var get         = require('./get');
var post        = require('./post');
var router      = express.Router();

router
    .get('/', get.getMessages)
    .post('/', post.saveMessage)
    
module.exports = router;