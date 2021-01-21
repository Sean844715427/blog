var express = require('express');
var router = express.Router();
var model = require('../model/category')


router.post('/', model.menu);

module.exports = router;
