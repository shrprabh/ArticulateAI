import jwt from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";
import { COOKIE_NAME } from "./constants.js";
//Creation of token
export const createToken = (id: string, email: string, expiresIn:string) => {
  const payload = {
    id,
    email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    // expires in 7 days
    expiresIn: expiresIn,//""7d"
  });
  return token;
};

export const verifyToken=async(req:Request,res:Response,next:NextFunction)=>{
  // to verfiy cookies once the user loggenin in front end to not login again and again
  const token=req.signedCookies[`${COOKIE_NAME}`];
  
  // if token is empty
  if(!token || token.trim() === ""){
    return res.status(401).json({message:"Token Not Received"})
  }
  // console.log(token); To verify token
  return new Promise<void>((resolve,reject)=>{
    return jwt.verify(token,process.env.JWT_SECRET,(err,success)=>{
      if(err){
        reject(err.message)
        return res.status(401).json({message:"Token Expired"})
      }else{
        resolve();
        res.locals.jwtData=success;
        return next();
      }
    })
  })

}