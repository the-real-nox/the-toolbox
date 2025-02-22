import { ValidationError } from "express-validator";

export const enum ErrorCode {

}

export class OpenToolboxError extends Error{
    private code: ErrorCode;

    constructor(code: ErrorCode, msg?: string) {
        super(msg);

        this.code = code;
    }
}