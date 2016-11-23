var mongoose = require('mongoose');
var Models = require('./models');

var vehicleSchema = new Schema({
  _id: { type: String },
  date: {
    type: Date, 
    default: Date.now 
  },
  numberplate: {
    type: String,
    required: true 
  },
  models: Models.modelsSchema
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

vehicleSchema.methods.findSameCompany = function(cb) {
  return this.model('Vehicle').find({ models.company: this.models.company }, cb);
};
vehicleSchema.methods.findSameCompanyandCategory = function(cb, de) {
  return this.model('Vehicle').find({ models.company: this.models.company, models.category: this.models.category }, cb, de);
};
// module.exports = new mongoose.Schema(vehicleSchema);
// module.exports.vehicleSchema = vehicleSchema;
