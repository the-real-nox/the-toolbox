import { RECS_CONFIG } from "../../../recs.js/dist/config.js";
import { EnvConfig } from "./def.js";
import { createTransport } from "nodemailer";

export const ENV_CONFIG = new EnvConfig();
export const MAILER = createTransport({
    host: ENV_CONFIG.MAILER.HOST,
    port: ENV_CONFIG.MAILER.PORT,
    secure: ENV_CONFIG.IS_PRODUCTION,
    auth: {
        user: ENV_CONFIG.MAILER.USER,
        pass: ENV_CONFIG.MAILER.PASSWORD
    }
})