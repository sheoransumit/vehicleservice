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


// Insert These two for Instance Method to work
// var xyz = new Vehicle({ numberplate: 'MH02CB1234', models:{company:'Maruti', category:'Sedan',models[model: }});
// var abc = new Vehicle({ numberplate: 'MH02CB1212', models:{company:'Honda', category:'Sedan',models[model: }});

// Then generate pricelist(model specific) and print a bill with total amount as backend calculation.

// Search vehicle by numberplate(Static Method)
var Vehicle = mongoose.model('Vehicle', vehicleSchema);
Vehicle.findByNumberPlate('MH02CB1212', function(err, vehicles) {
  console.log(vehicles);
});

// Query to get all numberplates with specific model and store it in modelvehicles schema(Instance Method)
// var Vehicles = require('./vehicle');
var Vehicle = mongoose.model('Vehicle', vehicleSchema);
var def = new Vehicle({ numberplate: 'MH02CB1111', models:{company:'Maruti', category:'Hatchback',models[model: }});

xyz.findSimilarCompany(function(err, xyz) {
  console.log(xyz); 
});
