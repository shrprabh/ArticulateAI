import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
config();
const app = express();
//Middlewares
app.use(express.json());
// remove it in production
app.use(morgan("dev"));
//Always check URL properly
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map