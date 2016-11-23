var mongoose = require('mongoose');
var Category = require('./categories');

var vehicleSchema = {
  _id: { type: String },
  date: {
    type: Date, 
    default: Date.now 
  },
  numberplate: {
    type: String,
    required: true 
  },
  category: Category.categoriesSchema
};

module.exports = new mongoose.Schema(vehicleSchema);
module.exports.vehicleSchema = vehicleSchema;