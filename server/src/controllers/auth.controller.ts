import { NextFunction, Request, Response } from "express";
import { authControllerInterface } from "../types/controller/auth.types";
import axios from "axios";
import redisClient from "../config/redis.config";
import getRandomInt from "../utils/randomNumber";
import StatusCode from "status-code-enum";
import { createToken } from "../utils/jwt";
import redisObject from "../utils/redisObject";

class AuthController implements authControllerInterface {
  async getCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      const savedCode = await redisClient.get(`${email}:otp`);
      if (savedCode)
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
        .then(() => redisClient.set(`${email}:otp`, code))
        .then(() => redisClient.expire(`${email}:otp`, 60 * 2))
        .then(() => res.status(201).end())
        .catch(() => res.send("has error"));
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, email } = req.body;

      const savedCode = await redisClient.get(`${email}:otp`);

      if (!savedCode)
        throw {
          message: "your code expired or not exist for ant reason",
          statusCode: StatusCode.ClientErrorBadRequest,
        };

      if (code !== savedCode)
        throw {
          message: "code is wrong",
          statusCode: StatusCode.ClientErrorBadRequest,
        };

      await redisClient.del(`${email}:otp`);

      const userToken = await createToken({ email });
      const userRefreshToken = await createToken({ email }, true);

      const userData = {
        token: userToken,
        refreshToken: userRefreshToken,
      };

      await redisObject.set(email, userData);

      res.status(200).send({
        success: true,
        statusCode: 200,
        data: {
          message: "login successfully",
          token: userToken,
          refreshToken: userRefreshToken,
        },
      });
    } catch (error) {
      console.log(error);
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

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.params;

      await redisClient.del(email);

      res.status(200).send({
        success: true,
        statusCode: 200,
        data: {
          message: "logout successfully",
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
