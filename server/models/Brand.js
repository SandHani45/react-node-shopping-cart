const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    name:{
        type:String,
        require:true,
        unique:1,
        maxlength:100
    }
})

module.exports = Brand = mongoose.model('brands',BrandSchema);