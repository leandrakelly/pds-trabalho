import { Router } from "express";
import { createCourseController } from "../modules/createCourse/CreateCourseFactory";
import { findCourseByIdController } from "../modules/findCourseById/FindCourseByIdFactory";
import { listCoursesController } from "../modules/listCourses/ListCoursesFactory";

const coursesRouter = Router();

coursesRouter.post('/', (request, response) => {
    return createCourseController.handle(request, response);
});

coursesRouter.get('/', (request, response) => {
    return listCoursesController.handle(request, response);
})

coursesRouter.get('/:id', (request, response) => {
    return findCourseByIdController.handle(request, response);
})

export { coursesRouter };