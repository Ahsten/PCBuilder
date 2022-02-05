var express = require('express');
var router = express.Router();

//Require controller modules
var category_controller = require('../controllers/catergoriesControlller');
var component_controller = require('../controllers/componentController');
var manufacturer_controller = require('../controllers/manufacturerController');

// Catergory Routes //

router.get('/', category_controller.index);