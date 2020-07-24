const express = require('express')
const router = express.Router();   // Using express router method
const { addUser, loginUser } = require('../contollers/user-controller');   // Initializing groceries controller

// Setting router for registration
router
    .route('/registration')
    .post(addUser)

    // Setting router for login
router
    .route('/login')
    .post(loginUser)


module.exports = router; // Exporting router
