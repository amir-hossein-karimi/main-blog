import { NextFunction, Request, Response } from "express";
import { authControllerInterface } from "../types/controller/auth.types";
import axios from "axios";

class AuthController implements authControllerInterface {
  getCode(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("code");
    } catch (error) {
      next(error);
    }
  }

  login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("change");
      axios
        .post("http://localhost:8003", {
          userEmail: "a.hoseinkarimi82@gmail.com",
          subject: "email sent",
          text: "this is from express core",
        })
        .then(() => {
          res.send("successfully sent email");
        })
        .catch((error) => {
          console.log("this is axios error", error);
          res.send("has error");
        });
    } catch (error) {
      next(error);
    }
  }

  register(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("this is register");
    } catch (error) {
      next(error);
    }
  }

  refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("this is refresh token");
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
