const express = require('express');
const {getItems} = require('../controllers/item')
const router = express.Router();

// get all items : 
router.get('/',(req,res)=>{
  getItems(req,res)
})

module.exports = router ;