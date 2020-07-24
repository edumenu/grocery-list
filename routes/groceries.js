const express = require('express')
const router = express.Router();   // Using express router method
const { getGroceries, addGroceries, deleteGroceries, addUser } = require('../contollers/grocery-controller');   // Initializing groceries controller

// Adding various routes fro getting groceries and then adding groceries
router
    .route('/')
    .get(getGroceries)
    .post(addGroceries)

// Setting router for registration
router
    .route('/registration')
    .post(addUser)

    // Setting router for deleting groceries
router
    .route('/:id')
    .delete(deleteGroceries)


module.exports = router; // Exporting router
