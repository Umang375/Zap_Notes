const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');

// ROUTE 1: Create a user using: POST "/api/auth/createuser". No login required


router.post('/' , (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body)
})

module.exports = router;