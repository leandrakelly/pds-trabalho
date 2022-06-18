import { Router } from "express";
import { createCourseController } from "../modules/createCourse/CreateCourseFactory";

const coursesRouter = Router();

coursesRouter.post('/', (request, response) => {
    return createCourseController.handle(request, response);
});

export { coursesRouter };