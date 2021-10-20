const express = require('express')
const router = express.Router()
const {login , register, verifyToken,isTokenValid} = require('../controllers/client')


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


//is token valid : 
router.post("/tokenIsValid", async (req, res) => {
     isTokenValid()
  });

module.exports = router ;