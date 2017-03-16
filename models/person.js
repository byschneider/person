const mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
    curriculum: {
        name: String,
        birthday: Date,
        phone: String,
        email: String
    },
    picture: String
});

module.exports = mongoose.model('Person', PersonSchema);