const express = require('express')
const router = express.Router()
const {login , register, verifyToken} = require('../controllers/client')


//Login
router.post('/login',async (req,res)=>{
    login(req,res)
})

//Register 
router.post('/register',(req,res)=>{
    register(req,res)
})

// after login : 
router.get('/profile',verifyToken,(req,res)=>{
    console.log('after login')
})



module.exports = router ;