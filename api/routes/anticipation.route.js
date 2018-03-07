
const express = require('express');
const router = express.Router();

const {
  anticipationDoSomething
} = require('../controller/anticipation.controller');

router.post('/', anticipationDoSomething);

module.exports = router;
