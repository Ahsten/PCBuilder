const res = require('express/lib/response');
var Component = require('../models/component');

//Display component list
exports.component_list = function(req, res){
    res.send('Comp list');
}

//Display detail page
exports.component_detail = function(req, res){
    res.send('Comp detail')
}

//Display componenet create form on GET
exports.component_create_get = function(req, res){
    res.send('Comp create GET');
}

exports.component_create_post = function(req, res){
    res.send('Comp create POST');
}

exports.component_delete_get = function(req, res){
    res.send('Comp delete GET');
}

exports.component_delete_post = function(req, res){
    res.send('Comp delete POST');
}

exports.component_update_get = function(req, res){
    res.send('Comp update GET');
}

exports.component_update_post = function(req, res){
    res.send('Comp update POST');
}