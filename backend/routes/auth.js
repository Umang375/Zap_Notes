const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser'); 

// ROUTE 1: Create a user using: POST "/api/auth/createuser". No login required


router.post('/' ,[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, 
      }).then(user => res.json(user))
      .catch(err => console.log(err))
      // res.json({message: err.message})
      // res.json({success: true, message: "Your account has been created successfully", body: req.body})

})

module.exports = router;