import { NextFunction, Request, Response } from "express";
import User from "../model/user.model";
import StatusCode from "status-code-enum";
import { ROLES } from "../constants";
import { userControllerIntefrace } from "../types/controller/user.types";
import { oneUserInterface } from "../types/model/user.types";

const userInstance = new User();

class UserController implements userControllerIntefrace {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userInstance.getAll({}, { __v: 0 });

      res.send({
        success: true,
        statusCode: StatusCode.SuccessOK,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userInstance.getOne(
        { _id: req.params.id },
        {
          __v: 0,
        }
      );

      res.send({
        success: true,
        statusCode: StatusCode.SuccessOK,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const user = await userInstance.getOne({ email: body.email });

      if (user)
        throw {
          message: "this user is already exist",
          statusCode: StatusCode.ClientErrorConflict,
        };

      const createRes = await userInstance.create({
        role: ROLES.USER,
        ...body,
      });

      res.send({
        success: true,
        statusCode: StatusCode.SuccessCreated,
        data: createRes,
      });
    } catch (error) {
      next(error);
    }
  }

  async bulkCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body.users;

      const uniqueEmails: Array<string> = [];

      const uniqueUsers = body.filter((element: { email: string }) => {
        const isDuplicate = uniqueEmails.includes(element.email);

        if (!isDuplicate) {
          uniqueEmails.push(element.email);

          return true;
        }

        return false;
      });

      const emails = uniqueUsers.map((item: oneUserInterface) => ({
        email: item.email,
      }));

      const users = await userInstance.getAll({
        $or: emails,
      });

      if (users) {
        users.forEach((item: oneUserInterface) => {
          const userIndex = uniqueUsers.findIndex(
            (user: oneUserInterface) => user.email === item.email
          );

          if (userIndex > -1) {
            uniqueUsers.splice(userIndex, 1);
          }
        });
      }

      const createRes = await userInstance.bulkCreate(uniqueUsers);

      const existEmails = users.map((item) => item.email);
      res.send({
        success: true,
        statusCode: StatusCode.SuccessCreated,
        data: {
          ...createRes,
          ...(existEmails.length
            ? {
                error: {
                  emails: existEmails,
                  message: "this emails are already exist",
                },
              }
            : {}),
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;

      if (!Object.keys(body).length) {
        throw {
          message: "body is required",
          statusCode: StatusCode.ClientErrorBadRequest,
        };
      }

      const updateRes = await userInstance.update(
        { _id: req.params.id },
        {
          ...body,
        }
      );

      res.send({
        success: true,
        statusCode: StatusCode.SuccessNoContent,
        data: updateRes,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const deleteRes = await userInstance.delete({ _id: req.params.id });

      res.send({
        success: true,
        statusCode: StatusCode.SuccessNoContent,
        data: deleteRes,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
