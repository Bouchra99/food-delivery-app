
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
        // console.log('invalid usernmae or password') 
        res.status(401).json('invalid username or password')
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
        // console.log('invalid usernmae or password') 
        res.status(401).json('invalid username or password')
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
            email : user.email,
            
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
            
        ).catch(
          err=>{
            console.log("cannot save " + err.message)
            res.status(400).json('user already registred')
          }
        )

     
        

    }catch(err){
        console.log(err.message)
    }
}

// const shopingCart = (req,res) =>{
//   try{

//     res.status(200).json('shoping Cart')

//   }catch(err){
//       res.status(404).json('you are not authorized')
//   }
// }


  

module.exports = {login ,register}