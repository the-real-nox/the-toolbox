import { ValidationError } from "express-validator";
import { RecsError, RecsErrorCode } from "../../../recs.js/dist/lib/error.js";

export type ErrorCode =
    "INVALID_BODY" |
    "CONFIG_ERROR"
;

export class OpenToolboxError extends Error{
    private code: ErrorCode;

    constructor(code: ErrorCode, msg?: string) {
        super(msg);

        this.code = code;
    }
}