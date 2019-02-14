let admin = (req,res,next)=>{
    if(req.user.role === 0 ){
        return res.json({message:"your not allowd get out of here"});
    }
    next();
}
module.exports = admin;