var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    date: String,
    name: String,
    jobTitle: String,
    phoneNumber: String,
    remarks: String,
});

module.exports = mongoose.model('staff', Schema);