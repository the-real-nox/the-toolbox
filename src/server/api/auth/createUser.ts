import { Router } from "express";
import { body, validationResult } from "express-validator";
import { Payload } from "../../def.js";
import { createRecsUser, RECS_CONFIG, RecsError, RecsErrorCode } from "recs-js";


export const createUserRouter = Router();

createUserRouter.post("/createUser", 
        body('userName').custom(v => RECS_CONFIG.validation.username_regex.test(v)).escape().notEmpty(),
        body('password').custom(v => RECS_CONFIG.validation.password_regex.test(v)).notEmpty(),
        body('email').isEmail().escape().notEmpty(),
    async (req, res) => {
    
    const errors = validationResult(req);

    
    if (!errors.isEmpty()) {
        new Payload(400)
            .success(false)
            .validationData(errors, "INVALID_BODY")
            .build(res);
        return;
    }

    
    try {
        await createRecsUser(req.body.userName, req.body.password, req.body.email);
    } catch (err) {

        if (err instanceof RecsError) {
            if (err.code == "USER_EXISTS") {
                new Payload(409)
                    .success(false)
                    .data({
                        code: err.code
                    })
                    .build(res);
                return;
            }
        }

        res.sendStatus(500);
        console.error(err);
        return;
    }

    res.sendStatus(200);
})