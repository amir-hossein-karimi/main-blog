import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthValidators from "../validators/auth.validators";

const authRouter = Router();
const authController = new AuthController();

authRouter.post("/getCode", AuthValidators.getCode(), authController.getCode);
authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.post("/refreshToken", authController.refreshToken);

export default authRouter;
