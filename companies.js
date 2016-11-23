var mongoose = require('mongoose');

var companiesSchema = {
  _id: { type: String },
  companies: [{
  	company:{
	    type: String,
	    required: true
	}
  }]
};

module.exports = new mongoose.Schema(companiesSchema);
module.exports.companiesSchema = companiesSchema;