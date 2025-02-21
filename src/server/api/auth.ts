import { Router } from "express";
import { createRecsUser } from "../../../../recs.js/dist/user.js";

export const authRouter = Router();

authRouter.post("/createUser", async (req, res) => {
    const data = req.body;

    if (!("userName" in data) || !("password" in data) || !("email" in data)) {
        res.status(400).send({ success: false, data: { msg: "Invalid body!" } });
        return;
    }

    await createRecsUser(data.userName, data.password, data.email);

    res.sendStatus(201);
})