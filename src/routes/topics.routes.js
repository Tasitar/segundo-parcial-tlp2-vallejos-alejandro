// ! ARCHIVO BASE: no modificar
import { Router } from "express";
import { create, getAll, getById, update, remove } from "../controllers/topics.controller.js";
import { createTopicValidation, updateTopicValidation, topicIdValidation } from "../middlewares/validations/topic.validation.js";
import { validateRequest } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", topicIdValidation, validateRequest, getById);
router.post("/", createTopicValidation, validateRequest, create);
router.put("/:id", updateTopicValidation, validateRequest, update);
router.delete("/:id", topicIdValidation, validateRequest, remove);

export default router;
