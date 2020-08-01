const mongoose = require('mongoose')

// Grocery list
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
        type: Date
    }
});

module.exports = mongoose.model('Grocery', GroceryShema);