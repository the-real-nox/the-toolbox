import { drizzle } from "drizzle-orm/node-postgres";
import { ENV_CONFIG } from "../config.js";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: ENV_CONFIG.POSTGRES.USER,
    password: ENV_CONFIG.POSTGRES.PASSWORD,
    database: ENV_CONFIG.POSTGRES.DB,
    host: ENV_CONFIG.POSTGRES.HOST,
    port: ENV_CONFIG.POSTGRES.PORT,
})

export const DB = drizzle({ client: pool });