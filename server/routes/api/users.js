const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')

//Model
const User = require('./../../models/User');

//Middleware
const auth = require('./../../middleware/auth');

// @route  GET api/users/test
// @desc   Test User router
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users Work" }));

// @route  POST api/users/register
// @desc   Test User router
// @access Public
router.post('/register',(req,res)=>{
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            return res.status(400).json({email:user.email + "email alredy exits" });
        }
    });
    const newUser = new User(req.body);
    //bcrypt password
    // bcrypt.genSalt(10,(err, salt)=>{
    //     bcrypt.hash(newUser.password,salt,(err,hash)=>{
    //         if(err) return err;
    //         newUser.password = hash;
    //         newUser
    //         .save()
    //         .then(user=>res.json({success:true,user}))
    //         .catch(err => console.log({success:false,err}));
    //     });
    // })
    //NEW style
    newUser
        .save()
        .then(user=>res.status(200).json({success:true,userdata:user}))
        .catch(err=>res.json({success:false,err}))
     //OLD style   
    // newUser.save((err,doc)=>{
    //     if(err) return res.json({success:false,err})
    //     res.status(200).json({
    //         success:true,
    //         userdata:doc
    //     })
    // })
})

// @route  POST api/users/login
// @desc   Test User router
// @access Public

router.post('/login',(req,res)=>{
    // find email
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false,message:"auth fail,email not found"});
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.status(400).json({login:'password not matched'})
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('w_auth',user.token).status(200).json({
                    loginSuccess:true,
                    userdata:user
                })
            })
        })
    })
})

// @route  GET api/users/auth
// @desc   Test User router
// @access Pravite
router.get(
    '/auth',
    auth,
    (req,res) => {
    res.status(200).json({
        isAdmin:req.user.role === 0 ? false : true,
        isAuth:true,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        role:req.user.role,
        cart:req.user.cart,
        history:req.user.history
    })
});

// @route  GET api/users/logout
// @desc   Test User router
// @access Pravite
router.get(
    '/logout',
    auth,
    (req,res) => {
       User.findOneAndUpdate(
            {_id:req.user._id},
            {token:''},
            (err,doc)=>{
                if(err) return err;
                return res.status(200).json({
                    success:true
                })
            }
        ) 
});

module.exports = router;