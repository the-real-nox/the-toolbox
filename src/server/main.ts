import express from "express";
import ViteExpress from "vite-express";
import { configRecs } from "recs-js";
import { DB } from "./db/db.js";
import { apiRouter } from "./api/index.js";
import { MAILER } from "./config.js";

const app = express();


configRecs(DB, MAILER);
app.use(express.json())

app.use("/api", apiRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
