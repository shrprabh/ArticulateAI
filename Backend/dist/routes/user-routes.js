import { Router } from "express";
import { getAllUsers, userSignUp } from "../controllers/user-controllers.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", userSignUp); //Domain/api/user/signup
export default userRoutes;
//# sourceMappingURL=user-routes.js.map