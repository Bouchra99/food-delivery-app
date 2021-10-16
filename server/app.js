const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/item');


const app = express();
// const dbURI = 'mongodb+srv://bouchra:FmJMIfWCt26BbRrS@foodapp.od78c.mongodb.net/FoodApp?retryWrites=true&w=majority';

const dbURI = 'mongodb://localhost:27017/FoodApp';


console.log('waiting for mongoDb to connect ...')
mongoose.connect(dbURI,{useNewUrlParser : true , useUnifiedTopology : true}).
    then(
         app.listen(3000,()=> console.log('server running on port 3000'))
    ).catch(
        (err)=>console.log(err.message)
    ); 

app.use('/items',itemRoutes); 

// app.get('/add',(req,res)=>{
//     const item = new Item(
//         {
//             label : 'item1',
//             imageUrl : 'image',
//             ingredients : ['tomato','cheese'],
//             price : '80 mad',
//             number : 1
//         }
//     )
//     item.save().then((result)=>{
//         console.log('item saved !')
//         res.send(result)
//     }
//     ).catch(err=>console.log(err.message))
// })