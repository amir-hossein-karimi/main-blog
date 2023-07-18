import { Request, Response, NextFunction } from "express";

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log("this is middleware");
  next();
};

export default checkLogin;
