const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { query, body, validationResult } = require("express-validator");

//Create a user using: POST "/api/auth/createuser". Does'nt require Auth...No login required
// If we send using GET our password is endanger as the password will be present in the URL which makes it highly unsafe
router.post(
  "/createuser",
  [
    body("email","Enter a valid Email").isEmail(), 
    body("name","Enter a valid Name").isLength({min:3}),
    body("password","Password must be 5 Characters").isLength({min:5})
],
  async (req, res) => {
    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    //Creating a user

    // Check whether user with this email exists already
    try{

      let user = await User.findOne({email: req.body.email});
      if(user){
          return res.status(400).json({error: "Sorry a user already exists with this email"})
      }
      user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
      })
      
      res.send(req.body);
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some Error Occured")
    }

  }
);

module.exports = router