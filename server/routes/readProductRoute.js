const express = require('express');
const router = express.Router();

router.get('/recipes', (req, res) => {
res.send("This is the product route")
});

module.exports = router;