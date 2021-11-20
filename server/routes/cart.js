const express = require('express')
const router = express.Router()
const {shopingCart,addToCart,removeItem,emptyCart} = require('../controllers/cart')
const {authorize} = require ('../middleware/authorize')

 // get elements in the shopping cart :
router.get('/cart',authorize,(req,res)=>{
    shopingCart(req,res)
 })

 //remove an item from shopping cart :

router.get('/remove/:id',authorize,(req,res)=>{
    removeItem(req,res)
})

 //remove all items from shopping cart :

 router.get('/empty',authorize,(req,res)=>{
    emptyCart(req,res)
})
 
 
 //add to / update shopping cart
router.post('/cart/add',authorize,(req,res)=>{
    addToCart(req,res)
})

 module.exports = router ;