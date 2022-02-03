#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Category = require('./models/category')
var Component = require('./models/component')
var manufacturer = require('./models/manufacturer')


var mongoose = require('mongoose');
const component = require('./component');
const manufacturer = require('./manufacturer');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var catergories = []
var components = []
var manufacturers = []

function categoryCreate(title, description, cb) {
  
  categorydetail = {title: title}
  if (description != false) categorydetail.description = description;


  var category = new Category(categorydetail);
       
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Category: ' + category);
    catergories.push(category)
    cb(null, category)
  }  );
}

function componentCreate(title, manufacturer, price, quantity, category, cb) {
  componentdetail = {
      title: title,
      manufacturer: manufacturer,
      price: price,
      quantity: quantity,
      category: category
  }

  var component = new Component(componentdetail);
       
  component.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Component: ' + component);
    components.push(component)
    cb(null, component);
  }   );
}

function manufacturerCreate(title, description, cb) {
  manufacturerdetail = {title: title}
  if (description != false) manufacturerdetail.description = description;

    
  var manufacturer = new Book(manufacturerdetail);    
  manufacturer.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Manufacturer: ' + manufacturer);
    manufacturers.push(manufacturer)
    cb(null, manufacturer)
  }  );
}


function createCategories(cb) {
    async.series([
        function(callback){
            categoryCreate('CPU', false, callback);
        },
        function(callback){
            categoryCreate('GPU', false, callback)
        },
        function(callback){
            categoryCreate('Memory', false, callback)
        },
        function(callback){
            categoryCreate('Storage', false, callback)
        },
        function(callback){
            categoryCreate('Motherboard', false, callback)
        },
        function(callback){
            categoryCreate('Case', false, callback)
        }
        ],
        // optional callback
        cb);
}



async.series([
    createCategories,

],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('PC parts: '+components);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});