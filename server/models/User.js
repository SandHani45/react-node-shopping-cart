const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

//Create Schema Form User
const UserSchema = new Schema({
    email:{
        type:String,
        require:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        require:true,
        minlength:5
    },
    name:{
        type:String,
        require:true,
        maxlength:100
    },
    lastname:{
        type:String,
        require:true,
        maxlength:100
    },
    cart:{
        type:Array,
        default:[]
    },
    history:{
        type:Array,
        default:[]
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    }
});
//bcrypt the password
UserSchema.pre('save', function(next){
    var user = this;
    //NEW Feature
    if(user.isModified('password')){
        bcrypt.genSalt(10)
        .then(salt=>bcrypt.hash(user.password,salt)
            .then(hash=>{
                user.password = hash;
                next()
            })
            .catch(err=>next(err)))
        .catch(err=>next(err));
       //OLD Feature 
    // bcrypt.genSalt(10,(err,salt)=>{
    //     if(err) return next(err);
    //     bcrypt.hash(user.email,salt,(err,hash)=>{
    //         if(err) return next(err);
    //         user.password = hash;
    //         next();
    //     })
    // })
    }else{
        next()
    };
});
// Method to compare password for login
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err); }

    cb(null, isMatch);
    });
};
//JWT TOKEN
UserSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(),process.env.SECRET);
    user.token = token;
    user
    .save()
    .then(user=>cb(null,user))
    .catch(err=>cb(err))
}
//Auth
UserSchema.statics.findByToken = function(token,cb){
 var user = this;
 jwt.verify(token,process.env.SECRET,(err,decode)=>{
    user.findOne({'_id':decode,'token':token})
        .then(user=>cb(null,user))
        .catch(err=>cb(err));
 })
}

module.exports = User = mongoose.model('user',UserSchema);