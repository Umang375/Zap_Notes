const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchUser = require('../middleware/fetchUser');

//get string from.env and use it as jwt secret key
const key = process.env.SECRET_KEY;

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
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass 
        });

      const data = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(data, key);
        // res.json({success: true, message: "Your account has been created successfully", body: user},authToken);
        
        res.json({authToken})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
})

// ROUTE 2: authenticate a user using: POST "/api/auth/login". No login required

router.post('/login' ,[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists()
  // body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })

], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email, password} = req.body;
  try {
    let user  = await User.findOne({email});
    if(!user){
      return res.status(400).json({error: "Please try to login with correct credentials"});
    }
    const passCompare = await bcrypt.compare(password, user.password);
    if(!passCompare){
      return res.status(400).json({error: "Please try to login with correct credentials"});
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, key);
    res.json({authToken})

  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


})

// ROUTE 3: get logged in user using: POST "/api/auth/getuser".login required
router.post('/getuser', fetchUser, async (req, res) => {
  try{
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router;