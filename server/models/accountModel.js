const mongoose = require('mongoose');

accountSchema = ({

isAdmin: {
type: Boolean,
default: false,
},
name: {
    type: String,
    required: true, 
}, 
lastName: {
    type: String,
    required: true,
},
email:{
    type: String,
    required: true
},
number: {
    type: Number,
    required: false
},

address: {
street: {
type: String,
required: true,
},
brgy: {
type: String,
required: true,
},
city:{
type: String,
required: true,
}, 
province: {
type: String,
required: true,
},
}
}, { timestamps: true, versionKey: false } );

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;