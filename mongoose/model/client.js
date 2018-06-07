var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    date: String,
    name: String,
    linkMan: String,
    phoneNumber: String,
    remarks: String,
});

module.exports = mongoose.model('client', Schema);