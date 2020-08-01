const express = require('express');
const router = express.Router();
const { getGroceries, addGroceries, deleteGroceries } = require('../contollers/grocery-controller');

router
    .route('/')
    .get(getGroceries)
    .post(addGroceries)

router
    .route('/:id')
    .delete(deleteGroceries)


module.exports = router;
