import { config } from "dotenv";

class EnvConfig {

    public POSTGRES = {
        HOST: process.env.POSTGRES_HOST,
        USER: process.env.POSTGRES_USER,
        PASSWD: process.env.POSTGRES_PASSWD,
        DB: process.env.POSTGRES_DB
    }

    constructor() {
        config();

        this.POSTGRES.HOST = process.env.POSTGRES_HOST;
        if (!this.POSTGRES.HOST) {
            throw new Error("Missing postgres-host!");
        }

        this.POSTGRES.USER = process.env.POSTGRES_USER;
        if (!this.POSTGRES.USER) {
            throw new Error("Missing postgres-user!");
        }

        this.POSTGRES.PASSWD = process.env.POSTGRES_PASSWD;
        if (!this.POSTGRES.PASSWD) {
            throw new Error("Missing postgres-password!");
        }


        this.POSTGRES.DB = process.env.POSTGRES_DB;
        if (!this.POSTGRES.DB) {
            throw new Error("Missing postgres-db-name!");
        }
    }
}

export const ENV_CONFIG = new EnvConfig();