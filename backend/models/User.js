const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"]
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User; 