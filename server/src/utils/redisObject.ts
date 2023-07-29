import redisClient from "../config/redis.config";

const redisObject = {
  async getAll(key: string) {
    try {
      const data = await redisClient.hGetAll(key);
      return data;
    } catch (e) {
      console.log("get all redis object error", e);
      return "error";
    }
  },
  async set(key: string, obj: object) {
    try {
      await Promise.all(
        Object.entries(obj).map((item) => redisClient.hSet(key, ...item))
      );
      return true;
    } catch (e) {
      console.log("set redis object error", e);
      return false;
    }
  },
  async delete(key: string, value: string) {
    try {
      await redisClient.hDel(key, value);
      return true;
    } catch (e) {
      console.log("delete redis object error", e);
      return false;
    }
  },
};

export default redisObject;
