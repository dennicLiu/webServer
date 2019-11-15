var mongoose = require('mongoose');

var cartfoodSchema = new mongoose.Schema({
    "id":String,
    "connectID":String,
    "userID":String,
    "name":String,
    "content":String

});
module.exports = mongoose.model("Comment",cartfoodSchema);
