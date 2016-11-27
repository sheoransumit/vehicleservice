var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billingSchema = new Schema({
  date: {
    type: Date, 
    default: Date.now 
  },
  vehicle: {type: Schema.ObjectId, ref: 'Vehicle'}, // assuming you name your model Vehicle
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
