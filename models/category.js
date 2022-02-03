var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema
(
    {
        title: {type: String, required: true},
    }
);

//Virtual for catergory's url
CategorySchema
.virtual('url')
.get(function() {
    return '/category/' + this.id;
});

module.exports = mongoose.model('Category', CategorySchema);