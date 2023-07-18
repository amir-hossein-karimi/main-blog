import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import StatusCode from "status-code-enum";

const errorHandler = (req: Request, res: Response, next: NextFunction) => {
  const { errors }: any = validationResult(req);

  const messages: any = {};
  if (errors.length > 0) {
    errors.forEach((error: any) => {
      if (!messages?.[error.param]) {
        messages[error.param] = error.msg;
      }
    });
  }

  if (Object.keys(messages).length > 0) {
    // @ts-ignore
    const statusCode = Object.values(messages)[0].includes(
      "token" || "unAuthorization"
    )
      ? StatusCode.ClientErrorUnauthorized
      : StatusCode.ClientErrorBadRequest;
    return res.status(statusCode).json({
      status: statusCode,
      success: false,
      data: {
        message: Object.values(messages)[0],
      },
    });
  }

  next();
};

export default errorHandler;
