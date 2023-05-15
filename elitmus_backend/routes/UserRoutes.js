import { Router } from "express";
import { signup, signin } from "../controllers/UserController.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send("Hii");
});

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

export default userRouter;