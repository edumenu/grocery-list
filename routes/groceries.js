const express = require('express')
const router = express.Router();   // Using express router method
const { getGroceries, addGroceries, deleteGroceries } = require('../contollers/grocery-controller');   // Initializing groceries controller

// Adding various routes
router
    .route('/')
    .get(getGroceries)
    .post(addGroceries)

router
    .route('/:id')
    .delete(deleteGroceries)
    

module.exports = router; // Exporting router
