var mongoose = require('mongoose');

var modelsSchema = {
	_id: { type: String },
	company: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	models: [{
		model:{
			type: String,
			required: true
		}
	}]
};

module.exports = new mongoose.Schema(modelsSchema);
module.exports.modelsSchema = modelsSchema;
