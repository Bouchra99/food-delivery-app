
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'kgdjsljguhà-è264521#@**$$^dgdg12554' 

const authorize =  (req, res, next) => {
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
        res.status(401).json({message : err.message})
    }

};

module.exports = {authorize}