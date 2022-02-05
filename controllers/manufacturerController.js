var Manufactuer = require('../models/manufacturer');

//Display list of Manufacturers
exports.manufacturer_list = function(req, res){
    res.send('Manu List');
}

//Display specific Manufacturer page
exports.manufacturer_detail = function(req, res){
    res.send('Manu Detail' + req.params.id);
}

//Display Manufacturer create form on GET
exports.manufacturer_create_get = function(req, res){
    res.send('Manu create get');
}

//Handle Manufacturer create on POST
exports.manufacturer_create_post = function(req, res){
    res.send('Manu create post');
}

//Display Manufacturer delete on GET
exports.manufacturer_delete_get = function(req, res){
    res.send('Manu delete get');
}

//Handle Manufacturer delete on POST
exports.manufacturer_delete_post = function(req, res){
    res.send('Manu delete post');
}

//Display Manufacturer update on GET
exports.manufacturer_update_get = function(req, res){
    res.send('Manu update get');
}

//Handle Manufacturer update on POST
exports.manufacturer_update_post = function(req, res){
    res.send('Manu update post');
}