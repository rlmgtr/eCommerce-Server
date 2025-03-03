
const express = require('express');
const router = express.Router();

router.post('/createaccount', (req, res) => {
    res.send("this is the create account route")
});

module.exports = router