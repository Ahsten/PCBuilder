var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManufacturerSchema = new Schema(
    {
        title: {type: String, maxLength: 100},
        description: {type: String, maxLength: 300},
    }
);

ManufacturerSchema
.virtual('url')
.get(function() {
    return '/manufacturer/' + this._id;
});

module.exports =  mongoose.model('Manufacturer', ManufacturerSchema);