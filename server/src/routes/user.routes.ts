import { Router } from "express";
import UserController from "../controllers/user.controller";
import UserValidator from "../validators/users.validators";
import errorHandler from "../middlewares/errorHandler";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/all", userController.getAll);
userRouter.get(
  "/one/:id",
  UserValidator.getOne(),
  errorHandler,
  userController.getOne
);
userRouter.post(
  "/create",
  UserValidator.create(),
  errorHandler,
  userController.create
);
userRouter.post(
  "/bulkCreate",
  UserValidator.bulkCreate(),
  errorHandler,
  userController.bulkCreate
);
userRouter.put(
  "/update/:id",
  UserValidator.update(),
  errorHandler,
  userController.update
);
userRouter.delete(
  "/delete/:id",
  UserValidator.delete(),
  errorHandler,
  userController.delete
);

export default userRouter;
