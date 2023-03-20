const Blimp_Controller = require('../system/core/Controller');

class Cars extends Blimp_Controller {
	constructor() {
		super();
		this.Car = this.loadModel('Car');
	}

	index = async (req, res) => {
		// Set session for counting page views
		if (!req.session.views) {
			req.session.views = 0;
		}
		req.session.views++;

		this.data.cars = await this.Car.getAllCars();
		this.data.count = (await this.Car.countAllCars()).count;
		this.data.views = req.session.views;

		res.render('cars', { data: this.data });
	}

	process = (req, res) => {
		if (req.body.reset) {
			req.session.views = 0;
		}
		res.redirect('/');
	}
}

module.exports = new Cars();