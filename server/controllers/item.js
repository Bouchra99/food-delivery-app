const express = require('express');
const Item = require('../models/item');

const app = express()

//get all items : 
const  getItems = async (req,res)=>{
    try{
        const allItems = await Item.find();
        res.send(allItems)
    }catch(err){
        console.log(err.message)
    }
   
}
//get Item by Id : 
const getItem = async (req,res,id)=>{
    try{
        const item = await Item.findById(id);
        res.send(item)
    }catch(err){
        console.log(err.message)
    }
}
module.exports = {getItems, getItem}
