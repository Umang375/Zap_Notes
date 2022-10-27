const mongoose = require('mongoose');
// const { Schema } = mongoose;
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Task = require('./task');



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("Invalid Email")
        //     }
        // }
    },
    phone: {
        type: Number,
        min: 10,
        // required: true,
        unique: true
    },
    work: {
        type: String,
        // required: true
    },  
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        // required: true
    }
})

module.exports = mongoose.model('User', UserSchema);