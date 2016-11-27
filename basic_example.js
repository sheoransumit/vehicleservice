var CarCategories = mongoose.model('CarCategories', carmodelsSchema);

// get all category elements for one company
CarCategories.find({ 'company': 'Maruti' }, 'category', function (err, carCats) {
  if (err) return handleError(err);
  carCats.forEach(function (value) {
  console.log('Category - %s Model - %s \n', value.cartype, value.carmodel);
    });
})
// get all carmodel for one company and one cartype
CarCategories.find({ 'company': 'Maruti' ,'category.cartype':'SUV' }, 'category.carmodel', function (err, carModels) {
  if (err) return handleError(err);
  carModels.forEach(function (value) {
  console.log('Model - %s', value);
    });
})
// get all carmodel for one cartype
CarCategories.find({ 'category.cartype':'SUV' }, 'category.carmodel', function (err, carModels) {
  if (err) return handleError(err);
  carModels.forEach(function (value) {
  console.log('Model - %s', value);
    });
})

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

var CarBilling = mongoose.model('CarBilling', billingSchema);

// First We add a company to companies, than category followed by model and vehicle registration.
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

var Companies = require('./companies');

var query = {'companies.company':tesla};
req.newData.companies.company = tesla;
Companies.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
});

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
