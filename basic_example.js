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

// Then generate pricelist(model specific) and print a bill with total amount as backend calculation.

// Search vehicle by numberplate
var Vehicle = mongoose.model('Vehicle', vehicleSchema);
Vehicle.findByNumberPlate('MH02CB1212', function(err, vehicles) {
  console.log(vehicles);
});

// Query to get all numberplates with specific model and store it in modelvehicles schema
// var Vehicles = require('./vehicle');
var Vehicle = mongoose.model('Vehicle', vehicleSchema);
var xyz = new Vehicle({ numberplate: 'MH02CB1234', models:{company:'Maruti', category:'Sedan',models[model: }});
var abc = new Vehicle({ numberplate: 'MH02CB1212', models:{company:'Honda', category:'Sedan',models[model: }});
var def = new Vehicle({ numberplate: 'MH02CB1111', models:{company:'Maruti', category:'Hatchback',models[model: }});

xyz.findSimilarCompany(function(err, xyz) {
  console.log(xyz); 
});
