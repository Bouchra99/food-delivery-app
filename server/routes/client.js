const express = require('express')
const router = express.Router()
const {login , register, authorize} = require('../controllers/client')


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

// protected routes : 

// router.get('/profile',authorize,(req,res)=>{
//     try{
//         res.json(req.user)
//     }catch(err){
//         res.status(500).json({err})
//     }
// })



module.exports = router ;