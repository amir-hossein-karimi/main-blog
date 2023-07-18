import { sign, verify, JwtPayload } from "jsonwebtoken";

import { SECRET } from "../constants";

const createToken = async (
  payload: string,
  isRefreshToken: boolean = false
): Promise<string> => {
  const token = await sign(payload, SECRET, {
    expiresIn: isRefreshToken ? "7d" : "1d",
  });
  return token;
};

const decodeToken = async (token: string): Promise<JwtPayload | string> => {
  const decoded = await verify(token, SECRET);
  return decoded;
};

export { createToken, decodeToken };
