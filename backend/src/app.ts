// https://github.com/microsoft/TypeScript-Node-Starter/blob/master/src/app.ts

import express from "express";
import compression from "compression";

import * as homeController from "./controllers/home";
import * as productController from "./controllers/product";

let _app: express.Application;

export function app(): express.Application {
  if (!_app) {
    _app = express();
    configureApp(_app);
  }
  return _app;
}

function configureApp(app: express.Application) {
  app.set("host", "0.0.0.0");
  app.set("port", Number(process.env.API_PORT));
  app.use(compression());

  app.get("/", homeController.index);
  app.get("/products", productController.index);
}
