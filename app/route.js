const eo = require('express');
route = eo.Router();
module.exports = route;

mainController = require('./controller/main.controller');

route.use(mainController.showHome);