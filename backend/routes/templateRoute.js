const express = require('express');
const templateController = require('../controllers/templateController');

const _router = express.Router();

_router.use('/', templateController.init);


module.exports = _router;