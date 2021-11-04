

const jwt = require('jsonwebtoken')
// const Client = require('../models/client');
const Cart = require('../models/cart')
const { getItems } = require('./item');

const shopingCart = async (req,res) =>{
    try{
        const token = req.header('token');
        const client_id = await jwt.decode(token)?.id ;
        const cart = await Cart.findOne({client_Id : client_id}) || [] ;
        console.log(cart)
        res.status(200).json(cart)
  
    }catch(err){
        res.status(404).json('you are not authorized')
    }
}

const removeItem = async (req,res)=>{
    try{
        const token = req.header('token');
        const client_id = await jwt.decode(token)?.id ;
        const id = req.params.id ; 
        console.log(id)
       

    }catch(err){
        res.status(500).json('failed to remove this item')
    }
}

const addToCart = async (req,res)=> {
    try{
        //get the client_id from  token
        const token = req.header('token') ; 
        const client_id = await jwt.decode(token)?.id ;
        //request body
        const {label,number,price,ingredients} = req.body ;
        //find the client cart or create a new one 
        const cart = await Cart.findOne({client_Id : client_id})|| new Cart();


        const items = [...cart.items,{
            'label':label,'ingredients' : ingredients,'number':number
        }] || [];

        const cost = cart.cost + price|| price;
        
        cart.items = items ;
        cart.client_Id  = client_id ;
        cart.cost = cost ;

        cart.save()

        console.log(cart)
       
        
    }catch(err){
        res.status(500).json("failed to add")
        // console.log(err.message)
    }

}

module.exports = {shopingCart,addToCart,removeItem}