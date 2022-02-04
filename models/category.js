var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema
(
    {
        title: {type: String, maxLength: 100},
        description: {type: String, maxLength: 300},
    }
);

//Virtual for catergory's url
CategorySchema
.virtual('url')
.get(function() {
    return '/category/' + this._id;
});

module.exports = mongoose.model('Category', CategorySchema);