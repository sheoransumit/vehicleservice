var mongoose = require('mongoose');
var Category = require('./categories');

var pricelistSchema = {
  _id: { type: String },
  category: Category.categoriesSchema,
  service: [{
	servicename: {
	    type: String,
		required: true 
		},
	price: {
		type: Number,
		required: true
	}
  }]
};

module.exports = new mongoose.Schema(pricelistSchema);
module.exports.pricelistSchema = pricelistSchema;