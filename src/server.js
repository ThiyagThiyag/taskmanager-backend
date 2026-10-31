import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import DbConnection from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors());

await DbConnection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on Port", process.env.PORT)
    })
});