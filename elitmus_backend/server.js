import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from "./utils/connection.js";
import userRouter from "./routes/UserRoutes.js";

const app = express();

app.use(cors("*"))
app.use(bodyParser.json());

//configure routes
app.use("/user", userRouter);


app.listen(8000, async () => {
    await connect();
    console.log("Server running successfully");

} )



