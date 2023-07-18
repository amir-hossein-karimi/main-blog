import { controllerMethodType } from "../global";

interface authControllerInterface {
  getCode: controllerMethodType;
  login: controllerMethodType;
  register: controllerMethodType;
  refreshToken: controllerMethodType;
}

export { authControllerInterface };
