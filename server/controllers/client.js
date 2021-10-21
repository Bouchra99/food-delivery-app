
const Client = require('../models/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'kgdjsljguhà-è264521#@**$$^dgdg12554' 

// login 
const login = async (req,res)=>{
  
  //get info from request : 
    const {username , password} = req.body ; 

  // check if the username exists in db : 
    const client = await Client.findOne({username}).lean()

    if(!client){
        console.log('invalid usernmae or password') // handle error properly !!! 
    }
  
  // check if password matches the one in the db : 
    if( await bcrypt.compare(password , client?.password)){

      // generate jwt token : 
        const token = jwt.sign(
            {id : client?._id ,
             username : client?.username
            },JWT_SECRET,{expiresIn : "1h"})
        
        // console.log('success')
        res.status(200).json({ token })
    }else{
        console.log('invalid usernmae or password') // handle error properly !!! 
    }
}

// register 
const register = async (req,res)=>{
   //get the user info from request : 
    const user = req.body ;
    try{
      // hash the password 
        const password = await bcrypt.hash(user.password,10) 
        
      // create a client document  
        const client = new Client({
            firstName : user.firstName ,
            lastName : user.lastName,
            username : user.username,
            password : password,
            phone : user.phone,
            adress : user.adress,
            email : user.email
        })
      
      // save in the DB : 
        client.save().then(
            () => {
              console.log('client saved');

              // generate jwt : 
              const token = jwt.sign({id : client?._id ,
                username : client?.username
               },JWT_SECRET,{expiresIn : "1h"})

               return res.status(200).json({token})
            }
            
        ).catch(err=>console.log(err.message))

     
        

    }catch(err){
        console.log(err.message)
    }
}


//middleware to verify token and authorize :-- move this to middleware folder 

const authorize = (req, res, next) => {
    const token = req.header("token");
  
    if (!token) {
      return res.status(403).send({ message: "No token provided! authorization denied " });
    }
  
    try{
        const payload = jwt.verify(token,JWT_SECRET)
        if(!payload){
           return res.status(403).send({ message: "cannot verify! authorization denied" });
        }

        req.user = payload;
        next() 

    }catch(err){
        res.status(401).json({message : err})
    }

  };
  

module.exports = {login ,register, authorize}