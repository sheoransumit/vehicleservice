// First We add a company to companies, than category followed by model and vehicle registration.
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var companiesSchema = require('./companies');

var query = {'company':tesla};
req.newData.company = tesla;
Companies.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
});

// Then generate pricelist(model specific) and print a bill with total amount as backend calculation.

// Query to get all numberplates with specific model and store it in modelvehicles schema
