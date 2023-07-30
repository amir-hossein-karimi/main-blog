import { controllerMethodType } from "../global";

interface authControllerInterface {
  getCode: controllerMethodType;
  login: controllerMethodType;
  refreshToken: controllerMethodType;
  logout: controllerMethodType;
}

export { authControllerInterface };
