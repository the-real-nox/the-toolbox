import express from "express";
import ViteExpress from "vite-express";
import { configRecs, RECS_CONFIG } from "recs-js";
import { DB } from "./db/db.js";
import { apiRouter } from "./api/index.js";
import { ENV_CONFIG, MAILER } from "./config.js";

const app = express();

RECS_CONFIG.mail.confirmationURLTemplate = ENV_CONFIG.ACTIVATE_REQUEST_TEMPLATE;
RECS_CONFIG.mail.sender = ENV_CONFIG.MAILER.USER;
configRecs(DB, MAILER);
app.use(express.json())

app.use("/api", apiRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
