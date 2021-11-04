const express = require('express');
const {getItems, getItem} = require('../controllers/item')
const router = express.Router();

// get all items : 
router.get('/',(req,res)=>{
  getItems(req,res)
})

//get item by Id : 
router.get('/:id',(req,res)=>{
//    res.send(req.params.id)
  
  getItem(req,res)
})

module.exports = router ;