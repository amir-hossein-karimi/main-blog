import { Schema, model, DocumentSetOptions, UpdateQuery } from "mongoose";
import { ROLES } from "../constants";

import StatusCode from "status-code-enum";
import errorMessages from "../constants/errorMessages";
import {
  oneUserEntryInterface,
  oneUserInterface,
  userModelInterface,
} from "../types/model/user.types";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, defaultValue: ROLES.USER },
});

const userModel = model("user", userSchema);

class User implements userModelInterface {
  async getAll(search?: any, projection?: any) {
    const allUsers = await userModel.find(
      search || {},
      projection || undefined
    );

    return allUsers || undefined;
  }

  async getOne(data: oneUserEntryInterface, projection?: any) {
    const oneUser = await userModel.find(data, projection || undefined);

    return oneUser[0];
  }

  async getOneByID(id: string) {
    const oneUser = await userModel.find({ _id: id });

    return oneUser[0];
  }

  async create(data: oneUserInterface) {
    const createRes = await userModel.create(data);

    if (!createRes) {
      throw {
        statusCode: StatusCode.ServerErrorInternal,
        message: errorMessages.INTERNAL_SERVER_ERROR,
      };
    }

    return {
      message: "user created successfuly",
    };
  }

  async bulkCreate(data: oneUserInterface[]) {
    const createRes = await userModel.insertMany(data);

    if (!createRes) {
      throw {
        statusCode: StatusCode.ServerErrorInternal,
        message: errorMessages.INTERNAL_SERVER_ERROR,
      };
    }

    return {
      message: "users created successfuly",
    };
  }

  async update(findBy: oneUserEntryInterface, data: oneUserInterface) {
    const user = await this.getOne(findBy);

    if (!user)
      throw {
        message: "user not found",
        statusCode: StatusCode.ClientErrorNotFound,
      };

    const updateRes = await userModel.updateOne(findBy, {
      $set: { ...user, ...data },
    });

    if (!updateRes.modifiedCount) {
      throw {
        statusCode: StatusCode.ServerErrorInternal,
        message: errorMessages.INTERNAL_SERVER_ERROR,
      };
    }

    return {
      message: "user updated successfully",
    };
  }

  async delete(findBy: oneUserEntryInterface) {
    const user = await this.getOne(findBy);

    if (!user)
      throw {
        message: "user not found",
        statusCode: StatusCode.ClientErrorNotFound,
      };

    const deleteRes = await userModel.deleteOne(findBy);

    if (!deleteRes.deletedCount) {
      throw {
        statusCode: StatusCode.ServerErrorInternal,
        message: errorMessages.INTERNAL_SERVER_ERROR,
      };
    }

    return {
      message: "user deleted successfuly",
    };
  }
}

export default User;
