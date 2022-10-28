const mongoose = require('mongoose');
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
    password: {
        type: String,
        // required: true
    }
})

const User = mongoose.model('User', UserSchema);
User.createIndexes();
module.exports = User; 