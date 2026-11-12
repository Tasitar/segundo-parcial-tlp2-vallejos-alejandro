// ! ARCHIVO BASE: no modificar
import { Router } from "express";
import { create, getAll, getById, update, remove } from "../controllers/courses.controller.js";
import { createCourseValidation, updateCourseValidation, courseIdValidation } from "../middlewares/validations/course.validation.js";
import { validateRequest } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", courseIdValidation, validateRequest, getById);
router.post("/", createCourseValidation, validateRequest, create);
router.put("/:id", updateCourseValidation, validateRequest, update);
router.delete("/:id", courseIdValidation, validateRequest, remove);

export default router;
