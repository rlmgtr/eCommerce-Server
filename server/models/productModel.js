const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
ProductName: {
    type: String,
    required: true,
    unique: true
},

serving: {
    type: Number,
    required: true,
}, 

description: {
    type: String,
    required: true
}, 


contains: {
    type: String, 
    required: true,
},

isAvailable: {
    type: Boolean,
    required: true,
},

}, {
    timestamps: true, versionKey: false
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;