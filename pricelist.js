var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pricelistSchema = new Schema{
	model: {
		type: Schema.ObjectId, 
		ref: 'CarCategories'
	}, 
	// assuming you name your model CarCategories
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
