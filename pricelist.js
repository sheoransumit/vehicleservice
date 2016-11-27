var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pricelistSchema = new Schema{
	carmodel: {
		type: Schema.ObjectId, 
		ref: 'CarCategories'
	}, 
	// assuming you name your model CarCategories
	service: [{
	servicename: {
		type: String,
		required: true 
		},
	serviceprice: {
		type: Number,
		required: true
	}
	}]
};
