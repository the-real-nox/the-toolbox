import { config } from "dotenv";

class EnvConfig {

    public POSTGRES: {
        HOST: string,
        USER: string,
        PASSWORD: string,
        DB: string,
        PORT: number,
    };

    constructor() {
        config();
        if (!process.env.POSTGRES_HOST) {
            throw new Error("Missing postgres-host!");
        }

        if (!process.env.POSTGRES_USER) {
            throw new Error("Missing postgres-user!");
        }

        if (!process.env.POSTGRES_PASSWORD) {
            throw new Error("Missing postgres-password!");
        }


        if (!process.env.POSTGRES_DB) {
            throw new Error("Missing postgres-db-name!");
        }

        if (!process.env.POSTGRES_PORT || Number.isNaN(process.env.POSTGRES_PORT)) {
            throw new Error("Invalid postgres-port!");
        }

        this.POSTGRES = {
            HOST: process.env.POSTGRES_HOST!,
            USER: process.env.POSTGRES_USER!,
            PASSWORD: process.env.POSTGRES_PASSWORD!,
            DB: process.env.POSTGRES_DB!,
            PORT: Number(process.env.POSTGRES_PORT!),
        }
    }
}

export const ENV_CONFIG = new EnvConfig();