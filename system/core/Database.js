const mysql = require('mysql')

/**
 * ----------------------------------------------------
 * Configure your database credentials here.
 * ----------------------------------------------------
 */
const dbConfig = require('../../config/db')

class Database {
	constructor() {
		this.connection = mysql.createConnection(dbConfig);
		this.connect();
	}

	connect = () => {
		this.connection.connect((err) => {
			if (err) throw err;
			console.log('Database connection successful.');
		});
	}

	close = () => {
		this.connection.end();
	}
}

module.exports = new Database().connection;