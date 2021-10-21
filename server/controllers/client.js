
const Client = require('../models/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'kgdjsljguhà-è264521#@**$$^dgdg12554' 

// login 
const login = async (req,res)=>{
    const {username , password} = req.body ; 
    const client = await Client.findOne({username}).lean()

    if(!client){
        console.log('invalid usernmae or password') // handle error properly !!! 
    }
    if( await bcrypt.compare(password , client?.password)){
        const token = jwt.sign(
            {id : client?._id ,
             username : client?.username
            },JWT_SECRET,{expiresIn : "1h"})
        
        console.log('success')
        res.status(200).json({result : client , token : token })
    }else{
        console.log('invalid usernmae or password') // handle error properly !!! 
    }
}

// register 
const register = async (req,res)=>{
    const user = req.body ;
    try{
        const password = await bcrypt.hash(user.password,10) 

        const client = new Client({
            firstName : user.firstName ,
            lastName : user.lastName,
            username : user.username,
            password : password,
            phone : user.phone,
            adress : user.adress,
            email : user.email
        })

        client.save().then(
            () => console.log('client saved')
        ).catch(err=>console.log(err.message))

    }catch(err){
        console.log(err.message)
    }
}


//middleware : 

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({ message: "No token provided! authorization denied " });
    }
  
    try{
        const verified = jwt.verify(token,JWT_SECRET)
        if(!verified){
           return res.status(403).send({ message: "cannot verify! authorization denied" });

        }
        console.log('verified value ',verified)
        next()
    }catch(err){
        res.status(401).json({msg : err})
    }

  };
  
  
module.exports = {login ,register, verifyToken}