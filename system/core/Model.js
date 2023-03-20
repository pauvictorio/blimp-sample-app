const db = require('../../system/core/Database');

class Blimp_Model {
	constructor() {
		this.data = {};
	}

	fetchAll = (query, params = []) => {
		return new Promise((resolve, reject) => {
			db.query(query, params, (err, result) => {
				if (err) reject(err);
				resolve(result);
			});
		});
	}

	fetchRecord = (query, params = []) => {
		return new Promise((resolve, reject) => {
			db.query(query, params, (err, result) => {
				if (err) reject(err);
				resolve(result[0]);
			});
		});
	}
}

module.exports = Blimp_Model;