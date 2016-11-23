var mongoose = require('mongoose');
var Category = require('./categories');

var billingSchema = {
  _id: { type: String },
  date: {
    type: Date, 
    default: Date.now 
  },
  numberplate: {
    type: String,
    required: true 
  },
  category: Category.categoriesSchema,
  billing:[{
    service: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  total:{
    type: String
  }
};

module.exports = new mongoose.Schema(billingSchema);
module.exports.billingSchema = billingSchema;