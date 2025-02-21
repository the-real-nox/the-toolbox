import { defineConfig } from "drizzle-kit";
import { ENV_CONFIG } from "./src/server/const";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    database: ENV_CONFIG.POSTGRES.DB,
    user: ENV_CONFIG.POSTGRES.USER,
    password: ENV_CONFIG.POSTGRES.PASSWORD,
    host: ENV_CONFIG.POSTGRES.HOST,
    port: ENV_CONFIG.POSTGRES.PORT,
    ssl: false
  }
})