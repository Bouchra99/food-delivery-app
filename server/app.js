const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const itemRoutes = require('./routes/item');
const clientRoutes = require('./routes/client');
const cartRoutes = require('./routes/cart')
// const Item = require('./models/item')

const app = express();
//==============
app.use(
    express.urlencoded({
      extended: true
    })
)
  
app.use(express.json())
//==============

// const dbURI = 'mongodb+srv://bouchra:FmJMIfWCt26BbRrS@foodapp.od78c.mongodb.net/FoodApp?retryWrites=true&w=majority';
app.use(cors())
const dbURI = 'mongodb://localhost:27017/FoodApp';


console.log('waiting for mongoDb to connect ...')
mongoose.connect(dbURI,{useNewUrlParser : true , useUnifiedTopology : true}).
    then(
         app.listen(4000,()=> console.log('server running on port 4000'))
    ).catch(
        (err)=>console.log(err.message)
    ); 

app.use('/items',itemRoutes); 
app.use('/user',clientRoutes);
app.use('/user',cartRoutes);

// app.get('/add',(req,res)=>{
//     const item = new Item(
//         {
//             label : 'item1',
//             imageUrl : 'http://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg',
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