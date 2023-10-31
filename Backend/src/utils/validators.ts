import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

//
export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    
    for (let validation of validations) {
      const result = await validation.run(req);
      //console.log("Validation result:", result.mapped()); 
    }
    console.log("Inside validate function");
    const errors = validationResult(req);
    console.log("Errors",errors.array());
    if (errors.isEmpty()) {
      //if there are no errors then move to next function
      res.send("Validation passed");
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};
//Middleware where we can validate the user first before if we need to store information in DB
export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Email is Required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain atleast 6 characters"),
];

