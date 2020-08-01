const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const { addUser, loginUser, deleteUser, validToken, getUserData } = require('../contollers/user-controller');

router
    .route('/')
    .get(auth, getUserData)

router
    .route('/registration')
    .post(addUser)

router
    .route('/login')
    .post(loginUser)

router
    .route('/delete')
    .delete(auth, deleteUser)

router
    .route('/tokenIsValid')
    .post(validToken)

module.exports = router;
