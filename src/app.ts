import './database';
import 'reflect-metadata';

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { routes } from './routes';
import swaggerDocs from './swagger.json';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

export { app };