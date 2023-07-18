import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const authRouter = Router();
const authController = new AuthController();

authRouter.post("/getCode", authController.getCode);
authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.post("/refreshToken", authController.refreshToken);

export default authRouter;
