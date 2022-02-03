var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentSchema = new Schema(
    {
        title: {title: String, required: true, maxlength: 100},
        manufacturer: {type: Schema.Types.ObjectId, ref: 'Manufacturer', required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true}
    }
);

ComponentSchema
.virtual('url')
.get(function(){
    return '/component/' + this.id;
});

module.exports = mongoose.model('Component', ComponentSchema);