const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchma = new Schema({

    label : {
        type : String , 
        required : true
    },
    imageUrl : {
        type : String , 
        required : true 
    },
    ingredients : {
         type : [String],
         required : true  
    },
    price : {
        type : Number ,
        required : true 
    },
    number : {
        type : Number , 
        required : true 
    }

}, { timeStamps : true })

const Item = mongoose.model('Item',itemSchma) ; 

module.exports = Item ; 