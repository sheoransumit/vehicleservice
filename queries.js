// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

var CarCategories = mongoose.model('CarCategories', carmodelsSchema);

// get all category elements for one company
CarCategories.find({ 'company': 'Maruti' }, 'cartype, carmodel', function (err, carCats) {
  if (err) return handleError(err);
  carCats.forEach(function (value) {
  console.log('Category - %s Model - %s \n', value.cartype, value.carmodel);
    });
})
// get all carmodel for one company and one cartype
CarCategories.find({ 'company': 'Maruti' ,'cartype':'SUV' }, 'carmodel', function (err, carModels) {
  if (err) return handleError(err);
  carModels.forEach(function (value) {
  console.log('Model - %s', value);
    });
})
// get all carmodel for one cartype
CarCategories.find({ 'cartype':'SUV' }, 'carmodel', function (err, carModels) {
  if (err) return handleError(err);
  carModels.forEach(function (value) {
  console.log('Model - %s', value);
    });
})

var Vehicle = mongoose.model('Vehicle', vehicleSchema);
// get all vehicles registered in 2016
Vehicle.find({"created_on": {"$gte": new Date(2015, 12, 31), "$lt": new Date(2016, 12, 31)}}, function (err, vehicles) {
  if (err) return handleError(err);
  vehicles.forEach(function (value) {
  console.log(value);
    });
})

var CarBilling = mongoose.model('CarBilling', billingSchema);
// get bills with denomination > 10000
CarBilling.find({"total": {"$gte": 1000}}, function (err, bills) {
  if (err) return handleError(err);
  bills.forEach(function (value) {
  console.log(value);
    });
})
