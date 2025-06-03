import express, { Application } from "express";
import Database from "./src/infra/db";

import "./shared/container";
import newsRouter from "./src/router/newsRouter";
import videosRouter from "./src/router/videosRouter";
import galeriaRouter from "./src/router/galeriaRouter";
import podcastRouter from "./src/router/podcastRouter";

class StartUp {
  public app: Application;
  private _db: Database = new Database();

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.2" });
    });

    this.app.use("/", newsRouter);
    this.app.use("/", videosRouter);
    this.app.use("/", galeriaRouter);
    this.app.use("/", podcastRouter);
  }
}

export default new StartUp();