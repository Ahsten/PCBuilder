var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentSchema = new Schema(
    {
        title: {type: String, maxLength: 100},
        manufacturer: {type: Schema.Types.ObjectId, ref: 'Manufacturer', required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
        category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
    }
);

ComponentSchema
.virtual('url')
.get(function(){
    return '/component/' + this._id;
});

module.exports = mongoose.model('Component', ComponentSchema);