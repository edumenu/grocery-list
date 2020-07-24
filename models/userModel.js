const mongoose = require('mongoose')

// Schema for grocery list
const UserShema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Please enter an email address']
    },
    password: {
        type: String,
        minlength: 5,
        required: [true, 'Please enter a password']
    },
    displayName: {
        type: String
    }
});

module.exports = mongoose.model('User', UserShema);