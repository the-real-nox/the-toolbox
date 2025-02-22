import { Router } from "express";
import { body, validationResult } from "express-validator";
import { Payload } from "../../def.js";
import { createRecsUser, RecsError, RecsErrorCode } from "recs-js";


export const createUserRouter = Router();

createUserRouter.post("/createUser", 
        body('userName').escape().notEmpty(),
        body('password').notEmpty(),
        body('email').escape().notEmpty(),
    async (req, res) => {
    
    const errors = validationResult(req);

    
    if (!errors.isEmpty()) {
        new Payload(400)
            .success(false)
            .validationData(errors)
            .build(res);
    }

    
    try {
        await createRecsUser(req.body.userName, req.body.password, req.body.email);
    } catch (err) {
        if (err instanceof RecsError) {
            if (err.code == RecsErrorCode.USER_EXISTS) {
                new Payload(409)
                    .success(false)
                    .data({
                        msg: "User already exists!"
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