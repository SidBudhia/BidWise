const express = require("express");
const router = new express.Router();

const mongoose = require('mongoose');
const DB = process.env.DATABASE
require('../db/mongoose');

const User = require("../models/userSchema");
const Product = require("../models/productsSchema");

const { requiredAuth, checkUser } = require("../auth/authMiddleware.js");
const { createToken } = require('../auth/jwttoken.js')

// search by name
router.get('/dashboard/:uid/searchname', requiredAuth, checkUser, async (req, res) => {
    const { searchname } = req.query
    const allProducts = await Product.find({ productname: searchname })

    var searchtag
    var searchtype = 'Search by Type'
    var sort = 'Sort'
    res.render('dashboard', { searchname, searchtag, searchtype, sort, allProducts, message: req.flash('message') })
})

// search by tags
router.get('/dashboard/:uid/searchtag', requiredAuth, checkUser, async (req, res) => {
    const { searchtag } = req.query
    const allProducts = await Product.find({ tags : { $in: searchtag } })

    var searchname
    var searchtype = 'Search by Type'
    var sort = 'Sort'
    res.render('dashboard', { searchname, searchtag, searchtype, sort, allProducts, message: req.flash('message') })
})

// search by type
router.get('/dashboard/:uid/searchtype', requiredAuth, checkUser, async (req, res) => {
    const { searchtype } = req.query
    const allProducts = await Product.find({ type : searchtype })

    var searchname
    var searchtag
    var sort = 'Sort'
    res.render('dashboard', { searchname, searchtag, searchtype, sort, allProducts, message: req.flash('message') })
})

// sort by type
router.get('/dashboard/:uid/sort', requiredAuth, checkUser, async (req, res) => {
    const { sort } = req.query
     var allProducts = await Product.find({})
    if (sort == 'Date Added (New First)') {
        allProducts = await Product.find({}).sort({ addedon: +1 })
    } else if (sort == 'Date Added (Old First)') {
        allProducts = await Product.find({}).sort({ addedon: -1 })
    } else if (sort == 'Alphabetically (A-Z)') {
        allProducts = await Product.find({}).sort({ productname: -1 })
    } else if (sort == 'Alphabetically (Z-A)') {
        allProducts = await Product.find({}).sort({ productname: +1 })
    } else if (sort == 'Highest Bid') {
        allProducts = await Product.find({}).sort({ highestbid: +1 })
    } else if (sort == 'Lowest Bid') {
        allProducts = await Product.find({}).sort({ highestbid: -1 })
    }
    
    var searchname
    var searchtag
    var searchtype = 'Search by Type'
    res.render('dashboard', { searchname, searchtag, searchtype, sort, allProducts, message: req.flash('message') })
})

module.exports = router