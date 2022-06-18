import { Router, Request, Response } from "express";
import { coursesRouter } from "./courses.routes";

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: "home"});
})

routes.use('/courses', coursesRouter);

export { routes };