var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to Message api");
});

module.exports = router;