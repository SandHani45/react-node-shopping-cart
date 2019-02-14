const express = require("express");
const router = express.Router();
const mongoose =require('mongoose');

//Model
const Brand = require('./../../models/Brand');
const Wood = require('./../../models/Wood');
const Product = require('./../../models/Product');

//Middleware
const auth = require('./../../middleware/auth');
const admin = require('./../../middleware/admin');

// @route  POST api/products/brand
// @desc   Test Brand router
// @access Pravite
router.post('/brand',auth,admin,(req,res)=>{
    const brand = new Brand(req.body);
    brand.save()
        .then(brand => res.status(200).json({
            success:true,brand:brand
        }))
        .catch(err=> res.json({
            success:false,
            err:err
        }));
})

// @route  get api/products/brand
// @desc   Test Brand router
// @access Public
router.get('/brand',(req,res)=>{
    Brand.find()
        .then(brand=>res.json({
            brand:brand
        }))
        .catch(err=> res.json({
            success:false,
            err:err
        }));
})

// @route  POST api/products/wood
// @desc   Test Brand router
// @access Pravite
router.post('/wood',auth,admin,(req,res)=>{
    const wood = new Wood(req.body);
    wood.save()
        .then(brand => res.status(200).json({
            success:true,wood:wood
        }))
        .catch(err=> res.json({
            success:false,
            err:err
        }));
})

// @route  get api/products/wood
// @desc   Test Brand router
// @access Public
router.get('/wood',(req,res)=>{
    Wood.find()
        .then(wood=>res.json({
            wood:wood
        }))
        .catch(err=> res.json({
            success:false,
            err:err
        }));
})


// @route  POST api/products/product
// @desc   Test Brand router
// @access Pravite
router.post('/article',auth,admin,(req,res)=>{
    const product = new Product(req.body);
    product.save()
        .then(product => res.status(200).json({
            success:true,
            product:product
        }))
        .catch(err=> res.json({
            success:false,
            err:err
        }));
})

// @route  get api/products/article
// @desc   Test Brand router
// @access Public
router.get('/articles',(req,res)=>{
    Product.find()
        .then(product=>res.json({
            product:product
        }))
        .catch(err=> res.json({
            success:false,
            err:err
        }));
});
// @route  get {{url}}/api/products/article_by_id?id=5c4d7d4d73f7181f1052a3a9,5c4f418970ba4d2bcc3698c3,5c4f419170ba4d2bcc3698c4&type=array
// @desc   Test Brand router
// @access Public

//using query string
router.get('/article_by_id',(req,res)=>{
    let type = req.query.type;
    let items = req.query.id;
    if(type==='array'){
        let ids = req.query.id.split(',');
        // console.log(ids)
        // items = [];
        items = ids.map(item=>{
            return mongoose.Types.ObjectId(item);
        })
        Product.find({'_id':{$in:items}})
        .populate('brand')
        .populate('wood')
        .exec((err,doc)=>{
            res.status(200).send(doc)
        })
    }
})

// @route  get {{url}}/api/products/article?sortBy=sold&order=desc&limit=100&skip=5
// @desc   Test Brand router
// @access Public
// Using Query String
//By ARRIVAL
//{{url}}/api/products/article?sortBy=createdAt&order=desc&limit=4
//By Sell
//{{url}}/api/products/article?sortBy=sold&order=desc&limit=100&skip=5

router.get('/articles',(req,res)=>{
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product.
        find().
        populate('brand').
        populate('wood').
        sort([[sortBy,order]]).
        limit(limit).
        exec((err,articles)=>{
            if(err) return res.status(400).send(err);
            res.send(articles)
        })
})

module.exports = router;