const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({

userId: {}, // reads the user account
items: {}, // reads the item they added, 


})

const Basket = mongoose.model('Basket', basketSchema);
module.exports = Basket;