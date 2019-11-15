var mongoose = require('mongoose');

var dashfoodSchema = new mongoose.Schema({
    "name":String,
    "id":String,
    "price":Number,
    "imgurl":String,
    "likes":Number,
    "hasComment":Boolean
});
module.exports = mongoose.model("Food",dashfoodSchema);
