const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type:String,
        require:true,
        unique:1,
        maxlength:100
    },
    description:{
        type:String,
        require:true,
        maxlength:100000
    },
    price:{
        type:Number,
        require:true,
        maxlength:25
    },
    brand:{
        type:Schema.Types.ObjectId,
        ref:'brands',
        require:true
    },
    wood:{
        type:Schema.Types.ObjectId,
        ref:'woods',
        require:true
    },
    shipping:{
        require:true,
        type:Boolean
    },
    available:{
        type:Boolean,
        require:true
    },
    frets:{
        require:true,
        type:Number
    },
    sold:{
        type:Number,
        require:true,
        default:0
    },
    publish:{
        require:true,
        type:Boolean
    },
    images:{
        type:Array,
        default:[]
    }
},{timestamps:true});

module.exports = Product = mongoose.model('Products',ProductSchema);