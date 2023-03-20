const Blimp_Model = require('../system/core/Model');

class Car extends Blimp_Model {
	constructor() {
		super();
		this.table = 'cars';
	}

	getAllCars = () => {
		const query = `SELECT * FROM ${this.table}`;
		return this.fetchAll(query);
	}

	countAllCars = () => {
		const query = `SELECT COUNT(*) as count FROM ${this.table}`;
		return this.fetchRecord(query);
	}
}

module.exports = new Car();