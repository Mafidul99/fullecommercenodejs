const { Category } = require('../models/category.js');
const { Product } = require('../models/products.js');
const express = require('express');
const router = express.Router();
require('dotenv/config');
const promiseLimit = require('promise-limit');

//const cloudinary = require("../utils/cloudinary.js");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});


router.get(`/`, async (req, res) => {
    const productList = await Product.find().populate("category");

    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);
});

router.post('/create', async (req, res) => {
    
    const category = await Category.findById(req.body.category);
    if(!category){
        return res.status(404).send("Invalid Category!");
    }

    const limit = promiseLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: "images cannot upload!",
            status: false
        })
    }

    let product = new Product({
        name:req.body.name,
        description:req.body.description,
        images:imgurl,
        brand:req.body.brand,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        numReviews:req.body.numReviews,
        isFeatured:req.body.isFeatured,
    });

    product = await product.save();
    if(!product){
        res.status(404).json({
            error: err,
            success: false,
        })
    }
    res.status(201).json(product);
});

router.get(`/:id`, async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(500).json({ message: 'The product with given id ws not found.' })
    }
    return res.status(200).send(product);
});


router.put(`/:id`, async (req, res) => {

    const limit = promiseLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: "images cannot upload!",
            status: false
        })
    }

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name:req.body.name,
            description:req.body.description,
            images:imgurl,
            brand:req.body.brand,
            price:req.body.price,
            category:req.body.category,
            countInStock:req.body.countInStock,
            rating:req.body.rating,
            numReviews:req.body.numReviews,
            isFeatured:req.body.isFeatured,
        },
        {new:true}
    );

    if (!product) {
        return res.status(500).json({
            message: 'product Cannot be Update!',
            status: false
        })
    }

    res.status(200).json({
        message:'The Product is Update!',
        status:true
    });
});



router.delete(`/:id`, async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deleteProduct) {
        res.status(404).json({
            message: 'Product not Found!',
            success: false
        })
    }
    res.status(200).json({
        message: 'Product is Deleted',
        success: true
    })
});


module.exports = router;