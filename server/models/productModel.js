const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
recipeName: {
    type: String,
    required: true,
},

serving: {
    type: Number,
    required: true,
}, 

meat: {
type: String,
required: true,
},

description: {
    type: string,
    required: true
}, 


contains: {
    type: string, 
    required: true,
},

isAvailable: {
    type: Boolean,
    required: true,
},

}, {
    timestamps: true, versionKey: false
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;