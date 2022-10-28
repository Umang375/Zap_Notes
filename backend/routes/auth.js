const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser'); 

// ROUTE 1: Create a user using: POST "/api/auth/createuser". No login required


router.post('/createuser' ,[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try {

      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" });
      }

      user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password, 
        })
        // res.json({message: err.message})
        res.json({success: true, message: "Your account has been created successfully", body: req.body})
        
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
})

module.exports = router;