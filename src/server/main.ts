import express from "express";
import ViteExpress from "vite-express";
import { ENV_CONFIG } from "./const.js";
import "./db.js";

console.log(ENV_CONFIG.POSTGRES.PASSWORD);

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
