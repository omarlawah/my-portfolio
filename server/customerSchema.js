const mongoose = require('mongoose');

// creating database customer schema
const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    message:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


// customer model 
const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;