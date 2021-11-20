

const jwt = require('jsonwebtoken')
// const Client = require('../models/client');
const Cart = require('../models/cart')


const shopingCart = async (req,res) =>{
    try{
        const token = req.header('token');
        const client_id = await jwt.decode(token)?.id ;
        const shoppingCart = await Cart.findOne({client_Id : client_id})  ;
      
        res.status(200).json(shoppingCart)
  
    }catch(err){
        res.status(404).json('you are not authorized')
    }
} 

const removeItem = async (req,res)=>{
    try{
        const token = req.header('token');
        const client_id = await jwt.decode(token)?.id ;
        const id = req.params.id ; 
        // console.log(id)
        const cart = await Cart.findOne({client_Id : client_id})
        // console.log(cart)
        const itemPrice = cart.items.filter(item=>item._id == id)[0].price ;
        cart.items = cart.items.filter(item => item._id != id)
        cart.cost -= itemPrice;
        // console.log(cart.cost);
        // cart.items = items ;
        cart.save()

    }catch(err){
        res.status(500).json(err.message)
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
            'label':label,'ingredients' : ingredients,'number':number,'price' : price
        }] || [];
        
        const cost = cart.cost + price|| price;
        
        cart.items = items ;
        cart.client_Id  = client_id ;
        cart.cost = cost ;

        cart.save()

        // console.log(cart)
        res.status(200)
        
    }catch(err){
        res.status(500).json("failed to add")
        // console.log(err.message)
    }

}

const emptyCart = async (req,res)=>{
    try{
        //console.log('delete everything from user\'s shopping cart')
        const token = req.header('token') ; 
        const client_id = await jwt.decode(token)?.id ;
        const cart = await Cart.findOne({client_Id : client_id})|| new Cart();
        cart.items = [] ;
        cart.cost = 0 ;
        cart.save()
    }catch(err){
        res.status(500).json('failed to validate the order')
    }
}

module.exports = {shopingCart,addToCart,removeItem,emptyCart}