import jwt from "jsonwebtoken";

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
