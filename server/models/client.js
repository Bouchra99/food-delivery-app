const mongoose = require('mongoose');

const Schema = mongoose.Schema ; 

// const itemSchema = new Schema({
//     label : String ,
//     ingredients : [String],
//     number: {
//         type : Number ,
//         default : 1
//     }
// })
// const cartSchema = new Schema ({
//     items : [itemSchema] ,
//     cost : {
//         type : Number,      
//     }
    
// },{timeStamps : true})

const clientSchema = new Schema({

    firstName : {type : String , required : true},
    lastName : { type : String , required : true},
    username : {type : String , required : true, unique : true},
    password : {type : String , required : true},
    phone : {type : String , required : true},
    adress : {type : String , required : true},
    email : {type : String  },
    // cart : [cartSchema] 

    
},{timeStamps : true})

const Client = mongoose.model('Client',clientSchema);
module.exports = Client