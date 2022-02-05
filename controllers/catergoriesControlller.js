var Category = require('../models/component');

//Display component list
exports.category_list = function(req, res){
    res.send('Comp list');
}

//Display detail page
exports.category_detail = function(req, res){
    res.send('Comp detail')
}

//Display componenet create form on GET
exports.category_create_get = function(req, res){
    res.send('Comp create GET');
}

exports.category_create_post = function(req, res){
    res.send('Comp create POST');
}

exports.category_delete_get = function(req, res){
    res.send('Comp delete GET');
}

exports.category_delete_post = function(req, res){
    res.send('Comp delete POST');
}

exports.category_update_get = function(req, res){
    res.send('Comp update GET');
}

exports.category_update_post = function(req, res){
    res.send('Comp update POST');
}