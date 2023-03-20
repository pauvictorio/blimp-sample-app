const express = require('express');

/**
 * Controllers 
 */

/**
 * ----------------------------------------------------
 * Import your controllers here.
 * 
 * Example:
 * const UserController = require('../controllers/UserController');
 * ----------------------------------------------------
 */
const Cars = require('../controllers/Cars');




/**
 * Router 
 */ 
const Router = express.Router();

/**
 * ----------------------------------------------------
 * Define your routes here.
 * 
 * Example:
 * Router.get('/users', UserController.index);
 * Router.post('/process_user', UserController.process);
 * ----------------------------------------------------
 */
Router.get('/', Cars.index);
Router.post('/process', Cars.process);

module.exports = Router;