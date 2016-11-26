var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carmodelsSchema = new Schema{
	company: {
		type: String,
		required: true
	},
	category: [{
		cartype: {
			type: String,
			required: true
		},
		carmodel: {
			type: String,
			required: true
		}
	}]
};
