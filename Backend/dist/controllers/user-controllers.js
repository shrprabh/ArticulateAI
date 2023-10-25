import User from "../models/User.js";
import { hash } from 'bcrypt';
export const getAllUsers = async (req, res, next) => {
    //get all users from the database
    try {
        // get all users
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignUp = async (req, res, next) => {
    //get all users from the database
    try {
        // user signup
        const { name, email, password } = req.body;
        const hashedpassowrd = await hash(password, 10);
        // we can't store the password as it is in the backend so we need to encrypt the password
        // so we will use a library called bcrypt
        const user = new User({ name, email, password: hashedpassowrd });
        await user.save();
        const users = await User.find();
        // since id is in object format
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map