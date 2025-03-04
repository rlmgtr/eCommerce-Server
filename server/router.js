const express = require('express');
const router = express.Router();

const signUp = require('./routes/signUpRoute');
const recipes = require('./routes/recipeListRoute');

router.use('/', signUp);
router.use('/', recipes);
// router.use('/',  )


module.exports = router;