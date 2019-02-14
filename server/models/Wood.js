const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WoodSchema = new Schema({
    name:{
        type:String,
        require:true,
        unique:1,
        maxlength:100
    }
})

module.exports = Wood = mongoose.model('woods',WoodSchema);