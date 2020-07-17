const mongoose = require('mongoose')

// Schema for grocery list
const GroceryShema = new mongoose.Schema({
    item: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    }
    ,
    createdAt: {
        type: Date,
        default: new Date().toISOString().replace(/T/, ' ').replace(/\ .+/, '')
    }
});

module.exports = mongoose.model('Grocery', GroceryShema);