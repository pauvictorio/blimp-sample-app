class Blimp_Controller {
	constructor() {
		this.data = {};
	}

	loadModel = (model) => {
		return require(`../../models/${model}`);
	}
}

module.exports = Blimp_Controller;