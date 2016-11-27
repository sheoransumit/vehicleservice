var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
  date: {
    type: Date, 
    default: Date.now 
  },
  numberplate: {
    type: String,
    required: true 
  },
  models: {type: Schema.ObjectId, ref: 'CarCategories'}, // assuming you name your model CarCategories
  bills: [{type: Schema.ObjectId, ref: 'CarBilling'}] // assuming you name your model CarCategories
});
