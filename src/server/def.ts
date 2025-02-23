import { config } from "dotenv";
import { Response } from "express";
import { Result, ValidationError } from "express-validator";
import { DateTime } from "luxon";
import { ErrorCode } from "./error.js";

export class EnvConfig {

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