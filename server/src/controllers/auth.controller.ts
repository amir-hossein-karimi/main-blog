import { NextFunction, Request, Response } from "express";
import { authControllerInterface } from "../types/controller/auth.types";
import axios from "axios";
import redisClient from "../config/redis.config";
import getRandomInt from "../utils/randomNumber";
import StatusCode from "status-code-enum";

class AuthController implements authControllerInterface {
  async getCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      const existedCode = await redisClient.get(email);
      console.log({ existedCode });
      if (existedCode)
        throw {
          message: "your code is mount yet",
          statusCode: StatusCode.ClientErrorBadRequest,
        };

      const code = getRandomInt();

      axios
        .post("http://localhost:8003", {
          userEmail: email,
          subject: "verification code",
          text: `this is your login code ===> ${code}`,
        })
        .then(() => redisClient.set(email, code))
        .then(() => redisClient.expire(email, 60 * 2))
        .then(() => res.send("code is sent to your email"))
        .catch(() => res.send("has error"));
    } catch (error) {
      next(error);
    }
  }

  login(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("this is login");
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
