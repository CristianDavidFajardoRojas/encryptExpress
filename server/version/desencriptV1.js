const desencriptController = require('../controller/desencriptController');
const express = require('express');
const desencript = express();

desencript.post("/", express.json(), desencriptController.desencriptText); 

module.exports = desencript;