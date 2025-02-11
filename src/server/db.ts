import { MikroORM } from "@mikro-orm/postgresql";
import RecsEntitites from "recs-js/entities";
import { ENV_CONFIG } from "./const.js";

const orm = await MikroORM.init({
    entities: RecsEntitites,
    user: ENV_CONFIG.POSTGRES.USER,
    password: ENV_CONFIG.POSTGRES.PASSWD,
    host: ENV_CONFIG.POSTGRES.HOST,
    dbName: ENV_CONFIG.POSTGRES.DB,
})