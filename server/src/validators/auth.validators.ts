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
}

export default AuthValidators;
