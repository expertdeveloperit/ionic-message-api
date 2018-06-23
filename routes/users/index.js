let router = require('express').Router( {mergeParams: true} );

let GET  = require('./get');

router

	.get('/', GET.getUsers)
    .post('/', post.saveUser)

module.exports = router;