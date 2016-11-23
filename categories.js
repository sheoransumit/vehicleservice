var mongoose = require('mongoose');

var categoriesSchema = {
  _id: { type: String },
  company: {
  	type:String,
	required: true
  },
  categories: [{
  		category: {
    		type: String,
			required: true
		}
  }]
};

module.exports = new mongoose.Schema(categoriesSchema);
module.exports.categoriesSchema = categoriesSchema;
