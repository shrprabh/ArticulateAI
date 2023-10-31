import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

// validation middleware
export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      //console.log("Validation result:", result.mapped());
    }
    console.log("Inside validate function");
    const errors = validationResult(req);
    console.log("Errors", errors.array());
    if (errors.isEmpty()) {
      //if there are no errors then move to next function
      // res.send("Validation passed"); //removing this to resolve the issue where after this userssignn up will be called leadling
      // into call of other middleware where res.send is used
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};
export const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is Required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain atleast 6 characters"),
];
//Middleware where we can validate the user first before if we need to store information in DB
export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  ...loginValidator
]
