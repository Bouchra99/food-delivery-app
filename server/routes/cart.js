const express = require('express')
const router = express.Router()
const {shopingCart,addToCart} = require('../controllers/cart')
const {authorize} = require ('../middleware/authorize')

router.get('/cart',authorize,(req,res)=>{
    shopingCart(req,res)
 })

router.post('/cart/add',authorize,(req,res)=>{
    addToCart(req,res)
})

 module.exports = router ;