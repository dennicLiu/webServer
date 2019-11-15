var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "name":String,
    "id":Number,
    "sex":Boolean,
    "imgurl":String,
    "likes":Number
});
module.exports = mongoose.model("Staff",userSchema);
