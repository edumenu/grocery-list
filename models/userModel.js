const mongoose = require('mongoose')

// UserModel
const UserShema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Please enter an email address']
    },
    city: {
        type: String,
        trim: true,
        required: [true, 'Please enter a city. It will be used to display the temperature at your location']
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