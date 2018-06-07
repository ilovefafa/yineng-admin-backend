var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    username: String,
    password: String,
    token: String,
});

module.exports = mongoose.model('users', Schema);