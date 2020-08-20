const express = require('express');
const router = express.Router();

const list = require('./../Controllers/ListController');

router.get('/list', list.fetch);


module.exports = router;