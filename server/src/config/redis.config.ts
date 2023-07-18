import { createClient } from "redis";

const redisClient = createClient();
redisClient.connect();
redisClient.on("connect", () => console.log("redis connect"));
redisClient.on("ready", () => console.log("redis is ready"));
redisClient.on("error", (err: Error) =>
  console.log("redis connection failed", err)
);

export default redisClient;
