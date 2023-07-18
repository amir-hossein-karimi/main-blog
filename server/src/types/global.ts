import { NextFunction, Request, Response } from "express";

type controllerMethodType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

interface controllerInterface {
  getAll: controllerMethodType;
  getOne: controllerMethodType;
  create: controllerMethodType;
  update: controllerMethodType;
  delete: controllerMethodType;
}

interface successMessage {
  message?: string;
}

export { controllerInterface, controllerMethodType, successMessage };
