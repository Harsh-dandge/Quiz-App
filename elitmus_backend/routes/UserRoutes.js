import { Router } from "express";
import { signup, signin, getUser, addprogress, resetprogress } from "../controllers/UserController.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send("Hii");
});

userRouter.get("/user", getUser);

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

userRouter.get("/addprogress", addprogress);

userRouter.get("/resetprogress", resetprogress);

export default userRouter;