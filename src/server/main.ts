import express from "express";
import ViteExpress from "vite-express";
import { configRecs } from "recs-js";
import { DB } from "./db/db.js";
import { authRouter } from "./api/auth.js";

const app = express();

app.use(express.json())

app.use("/auth", authRouter);

configRecs(DB);

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
