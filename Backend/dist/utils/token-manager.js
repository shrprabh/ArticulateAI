import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
//Creation of token
export const createToken = (id, email, expiresIn) => {
    const payload = {
        id,
        email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        // expires in 7 days
        expiresIn: expiresIn, //""7d"
    });
    return token;
};
export const verifyToken = async (req, res, next) => {
    // to verfiy cookies once the user loggenin in front end to not login again and again
    const token = req.signedCookies[`${COOKIE_NAME}`];
    // if token is empty
    if (!token || token.trim() === "") {
        return res.status(401).json({ message: "Token Not Received" });
    }
    // console.log(token); To verify token
    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: "Token Expired" });
            }
            else {
                // send some local variables
                console.log("Verification Succesfull");
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        });
    });
};
//# sourceMappingURL=token-manager.js.map