import { body } from "express-validator";

class AuthValidators {
  static getCode() {
    return [
      body("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("email format is wrong"),
    ];
  }
  static login() {
    return [
      body("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("email format is wrong"),
      body("code")
        .notEmpty()
        .withMessage("email is required")
        .isString()
        .withMessage("code is must be string")
        .isLength({ max: 4, min: 4 })
        .withMessage("code must be 4 char"),
    ];
  }
}

export default AuthValidators;
