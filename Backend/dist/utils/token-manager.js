import jwt from "jsonwebtoken";
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
//# sourceMappingURL=token-manager.js.map