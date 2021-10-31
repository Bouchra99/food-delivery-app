

const jwt = require('jsonwebtoken')
const Client = require('../models/client')

const shopingCart = async (req,res) =>{
    try{
        const token = req.header('token');
        const client_id = await jwt.decode(token)?.id ;
        const client = await Client.findById(client_id, 'cart')
        // console.log(client)
        res.status(200).json(client)
  
    }catch(err){
        res.status(404).json('you are not authorized')
    }
}

// const items = []
// var items = [];
const addToCart = async (req,res)=> {
    try{
        const token = req.header('token') ; 
        const client_id = await jwt.decode(token)?.id ;
        const {cart,cost} = req.body ; 
        // if(label !=''){
        //       items.push({label,ingredients}) 
        // }
        // console.log(items)
        // const update = await Cart.save()
        const update =  await Client.findByIdAndUpdate(client_id,{ 'cart.items' : cart , 'cart.cost' : cost } )
        if(!update){
            console.log("not updated")
        }

        // res.json({client_id,items})
        
    }catch(err){
        res.status(500).json("fail to add")
    }

}

module.exports = {shopingCart,addToCart}