const express = require('express')
const router = express.Router()
const {authorize} = require('../middleware/authorize')
const {login , register} = require('../controllers/client')


//Login
router.post('/login',async (req,res)=>{
    login(req,res)
})

//Register 
router.post('/register',(req,res)=>{
    register(req,res)
})


//verify if user is logged in: 
router.post('/verify',authorize,(req,res)=>{
    // --- move this to contoller folder 
    try{
        res.json(true)
    }catch(err){
        res.status(500).json({message : err})
    }
})

// client shoping Cart : 

// router.get('/cart',authorize,(req,res)=>{
//    shopingCart(req,res)
// })

// protected routes : 

// router.get('/profile',authorize,(req,res)=>{
//     try{
//         res.json(req.user)
//     }catch(err){
//         res.status(500).json({err})
//     }
// })



module.exports = router ;