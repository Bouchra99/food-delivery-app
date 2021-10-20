const mongoose = require('mongoose');

const Schema = mongoose.Schema ; 

const clientSchema = new Schema({

    firstName : {type : String , required : true},
    lastName : { type : String , required : true},
    username : {type : String , required : true, unique : true},
    password : {type : String , required : true},
    phone : {type : String , required : true, unique : true},
    adress : {type : String , required : true},
    email : {type : String , unique : true}
    
},{timeStamps : true})

const Client = mongoose.model('Client',clientSchema);
module.exports = Client