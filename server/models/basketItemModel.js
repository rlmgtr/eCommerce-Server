const mongoose = require('mongoose');

const basketItemSchema = new mongoose.Schema({

productId: {},
quantity: {},
Price: {},
Total: {}




})

const basketItem = mongoose.model('basketItem', basketItemSchema);
module.exports = basketItem