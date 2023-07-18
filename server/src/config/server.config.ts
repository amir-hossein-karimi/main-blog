import express, { Express, Response, Request, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
import router from "../routes/routes";
import { StatusCode } from "status-code-enum";
import mongoose from "mongoose";
import errorMessages from "../constants/errorMessages";
import swaggerJs from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app: Express = express();

dotenv.config();

const port: number = process.env.SERVER_PORT ? +process.env.SERVER_PORT : 8000;
const host: string = process.env.HOST_NAME || "";
const dbUrl: string = process.env.MONGO_URL || "";
const dbName: string = process.env.DB_NAME || "";

interface error extends Error {
  statusCode?: number;
}

const configApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "..", "public")));
};

const configRoutes = () => {
  app.use(router);
};

const configErrors = () => {
  app.use((req: Request, res: Response) => {
    res.status(StatusCode.ClientErrorNotFound).send({
      statusCode: StatusCode.ClientErrorNotFound,
      success: true,
      data: {
        message: errorMessages.NOT_FOUND,
      },
    });
  });
  app.use((error: error, req: Request, res: Response, next: NextFunction) => {
    const errorStatus = error?.statusCode || StatusCode.ServerErrorInternal;
    const errorMessage = error?.message || errorMessages.INTERNAL_SERVER_ERROR;
    res.status(errorStatus).send({
      statusCode: errorStatus,
      success: true,
      data: {
        message: errorMessage,
      },
    });
  });
};

const configServer = () => {
  const server = app.listen(port, host, 1, () => {
    console.log(`http://${host}:${port}/`);
  });

  process.on("SIGTERM", () => {
    console.info("SIGTERM signal received.");
    console.log("Closing http server.");
    server.close((err) => {
      console.log("Http server closed.");
      process.exit(err ? 1 : 0);
    });
  });
};

const configRedis = () => {
  require("./redis.config");
};

const connectMongodb = () => {
  mongoose
    .connect(dbUrl, {
      dbName,
    })
    .then(() => console.log("mongo db connected successfuly"))
    .catch(() => console.log("mongo db crashed"));
};

const configSwagger = () => {
  app.use(
    "/apis",
    swaggerUi.serve,
    swaggerUi.setup(
      swaggerJs({
        swaggerDefinition: {
          openapi: "3.0.0",
          info: {
            title: "blog",
            description:
              "this blog created using express, mongodb and typescript",
            version: "1.0.0",
          },
          servers: [
            {
              url: `http://${host}:${port}`,
            },
          ],
        },
        apis: [`${__dirname}/../swagger/**/*.ts`],
      }),
      { explorer: true }
    )
  );
};

const serverConfigs = () => {
  configApp();
  connectMongodb();
  configRedis();
  configSwagger();
  configRoutes();
  configErrors();
  configServer();
};

export default serverConfigs;
