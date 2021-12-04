var jwt = require('jsonwebtoken');


const TokenGenerado = (payload) =>{
 return jwt.sign(payload, 'shhhhh',{
    expiresIn: "16h"
 });
}


const TokenValidator = (token) =>{
   if(token){
      const validator = jwt.verify(token,'shhhhh',(err,data)=>{
         if(data){return {data:data,}}
         if(err){return {error:err,}}
      } )
      return validator
   }
   }
   
 
 module.exports = {TokenGenerado , TokenValidator} 