const encriptController = require('../controller/encriptController');
const express = require('express');
const encript = express();

encript.post("/", express.json(), encriptController.encriptText); 

module.exports = encript;