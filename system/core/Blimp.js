const express = require('express');
const app = express();

const BASEPATH = __dirname + '/../..';

/**
 * ----------------------------------------------------
 * Blimp comes with a few dependencies pre-installed.
 * 1. Session
 * 2. View engine
 * 3. Body parser
 * 4. MySQL (in core/Database.js)
 * ----------------------------------------------------
 * 
 */


/**
 * ----------------------------------------------------
 * Configure your application in config/config.js here.
 * ----------------------------------------------------
 * 
 */
	const config = require(BASEPATH + '/config/config');

/**
 * ----------------------------------------------------
 * Pre-installed dependencies
 * ----------------------------------------------------
 * 
 * Session
 * 
 */
	const session = require('express-session');
	app.use(session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: true,
	}));

/**
 * View engine
 * 
 */
	app.set('view engine', config.viewEngine);

/**
 * Body parser
 * 
 */
	const bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({ extended: true }));


/**
 * ----------------------------------------------------
 * Your static files must be placed in the assets folder.
 * ----------------------------------------------------
 * 
 */
	app.use(express.static(config.static));

/**
 * ----------------------------------------------------
 * Routes are configured in config/routes.js.
 * ----------------------------------------------------
 * 
 */
	app.use('/', require(BASEPATH + '/config/routes'));

/**
 * ----------------------------------------------------
 * Server port.
 * ----------------------------------------------------
 * 
 */
const PORT = config.port;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;