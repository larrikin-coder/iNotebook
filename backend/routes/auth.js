const express = require('express');
const router = express.Router();
const User = require("../models/User");


//Create a user using: POST "/api/auth". Does'nt require Auth
// If we send using GET our password is endanger as the password will be present in the URL which makes it highly unsafe
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router