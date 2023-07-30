import { param, body } from "express-validator";
import User from "../model/user.model";
import { ROLES } from "../constants";
const user = new User();

class UserValidator {
  static #idValidator() {
    return [
      param("id")
        .notEmpty()
        .withMessage("id is required")
        .isMongoId()
        .withMessage("id is not valid"),
    ];
  }

  static async #emailValidation(email: string, optionalKey?: boolean) {
    if (optionalKey && !email) return true;
    const findedUser = await user.getOne({ email });

    if (findedUser) throw new Error("user already exist");
    else return true;
  }

  static #roleValidation(role: string) {
    if (role && !Object.values(ROLES).includes(role))
      throw new Error(`${role} is not accepted for role`);
    else return true;
  }

  static getOne() {
    return [...this.#idValidator()];
  }

  static create() {
    return [
      body("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("email is not valid")
        .custom(async (value) => await this.#emailValidation(value)),
      body("role").custom(this.#roleValidation),
    ];
  }

  static bulkCreate() {
    return [
      body("users")
        .notEmpty()
        .withMessage("users is required")
        .isArray()
        .withMessage("enter a array"),
      body("users.*.role").custom(this.#roleValidation),
    ];
  }

  static update() {
    return [
      ...this.#idValidator(),
      body("email")
        .optional()
        .isEmail()
        .withMessage("invalid email")
        .custom(async (value) => await this.#emailValidation(value, true)),
      body("role").custom(this.#roleValidation),
    ];
  }

  static delete() {
    return [...this.#idValidator()];
  }
}

export default UserValidator;
