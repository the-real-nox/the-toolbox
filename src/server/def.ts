import { config } from "dotenv";
import { Response } from "express";
import { Result, ValidationError } from "express-validator";
import { DateTime } from "luxon";
import { ErrorCode, OpenToolboxError } from "./error.js";

export class EnvConfig {

    public IS_PRODUCTION: boolean;

    public POSTGRES: {
        HOST: string,
        USER: string,
        PASSWORD: string,
        DB: string,
        PORT: number,
    };

    public MAILER: {
        USER: string,
        PASSWORD: string,
        HOST: string,
        PORT: number,
    };

    constructor() {
        config();

        this.IS_PRODUCTION = process.env.NODE_ENV == "production";

        if (!process.env.POSTGRES_HOST) {
            throw new OpenToolboxError("CONFIG_ERROR", "Missing postgres-host!");
        }

        if (!process.env.POSTGRES_USER) {
            throw new OpenToolboxError("CONFIG_ERROR", "Missing postgres-user!");
        }

        if (!process.env.POSTGRES_PASSWORD) {
            throw new OpenToolboxError("CONFIG_ERROR", "Missing postgres-password!");
        }


        if (!process.env.POSTGRES_DB) {
            throw new OpenToolboxError("CONFIG_ERROR", "Missing postgres-db-name!");
        }

        if (!process.env.POSTGRES_PORT || Number.isNaN(process.env.POSTGRES_PORT)) {
            throw new OpenToolboxError("CONFIG_ERROR", "Invalid postgres-port!");
        }

        if (!process.env.MAIL_HOST) {
            throw new OpenToolboxError("CONFIG_ERROR", "Mail-user is missing!");
        }

        if (!process.env.MAIL_PORT || Number.isNaN(process.env.MAIL_PORT)) {
            throw new OpenToolboxError("CONFIG_ERROR", "Mail-user is missing!");
        }

        if (!process.env.MAIL_USER) {
            throw new OpenToolboxError("CONFIG_ERROR", "Mail-user is missing!");
        }

        if (!process.env.MAIL_PASSWORD) {
            throw new OpenToolboxError("CONFIG_ERROR", "Mail-user is missing!");
        }

        this.POSTGRES = {
            HOST: process.env.POSTGRES_HOST!,
            USER: process.env.POSTGRES_USER!,
            PASSWORD: process.env.POSTGRES_PASSWORD!,
            DB: process.env.POSTGRES_DB!,
            PORT: Number(process.env.POSTGRES_PORT!),
        };

        this.MAILER = {
            HOST: process.env.MAIL_HOST,
            PORT: Number(process.env.MAIL_PORT),
            USER: process.env.MAIL_USER,
            PASSWORD: process.env.MAIL_PASSWORD,
        }
    }
}

export class Payload {
    private _data: object = {};
    private code: number;
    private _success: boolean = true;

    constructor(code: number = 200) {
        this.code = code;
    }

    data(data: object) {
        this._data = data;
        return this;
    }

    validationData(data: Result<ValidationError>, err_code: ErrorCode) {
        this._data = { code: err_code, fields: data.formatWith(err => err.msg).mapped() }
        return this;
    }

    success(success: boolean) {
        this._success = success;
        return this;
    }

    build(res: Response) {
        res.status(this.code).send({
            time: DateTime.now().toISO(),
            success: this._success,
            data: this._data,
        })
    }
}