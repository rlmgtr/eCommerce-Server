const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.post("/", async (req, res)=> {

try {
    const { ProductName, serving, description, contains, isAvailable } = req.body;

if (!ProductName) {
    return res.status(400).json({message: "please add product"});
}

const newProduct = new Product({
    userID: req.user.userId,
    ProductName, serving, description, contains, isAvailable
});

await newProduct.save();

res.status(201).json({ message: "Successsfully added a product"});
} catch (error) {
    console.error("error in addig tasks", error );
    res.status(500).json({message: "Server error", error: error.message });
}

});

module.exports = router; 