const express = require('express')
const router = express.Router();   // Using express router method
const auth = require('../middleware/auth');
const { addUser, loginUser, deleteUser, validToken } = require('../contollers/user-controller');   // Initializing groceries controller

// Setting router for registration
router
    .route('/registration')
    .post(addUser)

// Setting router for login
router
    .route('/login')
    .post(loginUser)

// Setting router for delete
router
    .route('/delete')
    .delete(auth, deleteUser)

// Setting router for valid token
router
    .route('/tokenIsValid')
    .post(validToken)

module.exports = router; // Exporting router
