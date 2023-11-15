import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //get all users from the database
  try {
    // get all users
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //get all users from the database
  try {
    console.log("Inside User Sign Up");
    // user signup
    const { name, email, password } = req.body;
    //To validate if user already exist in database
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(401).send("User Already Registered");
    const hashedpassword = await hash(password, 10); //10 will do the 10 folds of encryption strategy
    // we can't store the password as it is in the backend so we need to encrypt the password
    // so we will use a library called bcrypt
    const user = new User({ name, email, password: hashedpassword });
    await user.save();
    //create token and store cookie
    // after 7 days user need to relogin
    const token=createToken(user._id.toString(),user.email,"7d");

    res.clearCookie(COOKIE_NAME,{path:"/",domain:"localhost",httpOnly:true,signed:true}); // because if the same user login twice or again we need to clear the cookie and we need to set a new cookie
    // in above expires is not required
    const expires=new Date();
    // here also we can give the same day as token that is from present date
    expires.setDate(expires.getDate()+7);
    // path:"/" inside the root directoty we want to store cookies
    // domain:"localhost" since we are working on local host if we deploy we need to change domain
    // we can use expires since we have set above directly
    res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true});
    const users = await User.find();
    // since id is in object format
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log("USer exists",user);
    if (!user) {
      return res.status(401).send("User Not Registered");
    }
    // validating the hashed password in database
    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect Password");
    }
    // Creating a token after succesful signup
    const token=createToken(user._id.toString(),user.email,"7d");
    // know we need to send the token in the form of http cookies 
    // we can do it using library cookie parser to send from backend to front end
    res.clearCookie(COOKIE_NAME,{path:"/",domain:"localhost",httpOnly:true,signed:true}); // because if the same user login twice or again we need to clear the cookie and we need to set a new cookie
    // in above expires is not required
    const expires=new Date();
    // here also we can give the same day as token that is from present data
    expires.setDate(expires.getDate()+7);
    // path:"/" inside the root directoty we want to store cookies
    // domain:"localhost" since we are working on local host if we deploy we need to change domain
    // we can use expires since we have set above directly
    res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true});
    return res.status(200).send({message:"OK",id:user._id})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};

