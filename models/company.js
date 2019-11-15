var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "companyname":String,
    "address":String
});
module.exports = mongoose.model("Company",userSchema);
