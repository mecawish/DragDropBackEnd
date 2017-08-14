const express = require('express');
const textboxController = require('../controllers/textboxController');
const helloWorldController = require('../controllers/helloWorldController');

module.exports = function(app) {
	const textboxRoutes = express.Router();
	textboxRoutes.get('/getTextboxes', textboxController.getTextboxes);
	textboxRoutes.get('/helloworld', helloWorldController.helloworld);
	app.use('/textboxes', textboxRoutes);
}