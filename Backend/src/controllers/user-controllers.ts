import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { compare, hash } from "bcrypt";

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
    return res.status(200).send({message:"OK",id:user._id})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};
