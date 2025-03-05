const express = require('express');
const router = express.Router();

const signUp = require('./routes/signUpRoute');
const recipes = require('./routes/readProductRoute');

router.use('/', signUp);
router.use('/', products);
// router.use('/', addproducts)


module.exports = router;