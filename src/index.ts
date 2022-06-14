import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "reflect-metadata";
import "./database";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
 // app.use(routes);

export { app };