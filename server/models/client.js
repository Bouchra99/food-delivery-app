const mongoose = require('mongoose');

const Schema = mongoose.Schema ; 

const clientSchema = new Schema({
    name : {type : String , required : true},
    phone : {type : String , required : true},
    adress : {type : String , required : true},
},{timeStamps : true})

const Client = mongoose.model('Client',clientSchema);
module.exports = Client