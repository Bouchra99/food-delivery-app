const mongoose = require('mongoose')

const Schema =  mongoose.Schema ;


const itemSchema = new Schema({
    label : {
        type : String
    } ,
    ingredients : [String],
    price : {
        type : Number
    },
    number: {
        type : Number ,
        default : 1
    }
})
const cartSchema = new Schema({
    client_Id : {
        type : String,
    },
    items : [itemSchema] ,
    cost : {
        type : Number,      
    }
    
},{timeStamps : true})

const Cart = mongoose.model('Cart',cartSchema);
module.exports = Cart