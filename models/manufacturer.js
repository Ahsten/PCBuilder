var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManufacturerSchema = new Schema(
    {
        title: {type: String, required: true, maxlength: 100},
        description: {type: String, maxlength: 300}
    }
);

ManufacturerSchema
.virtual('url')
.get(function() {
    return '/manufacturer/' + this.id;
});

module.exports = mongoose.model('Manufacturer', ManufacturerSchema);