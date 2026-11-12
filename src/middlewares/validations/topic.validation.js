// ! ARCHIVO BASE: no modificar
import { body, param } from "express-validator";
import Topic from "../../models/topic.model.js";

export const topicIdValidation = [
  param("id").isMongoId().withMessage("El ID del tópico no es válido"),
];

export const createTopicValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres")
    .bail()
    .custom(async (value) => {
      const topic = await Topic.findOne({ name: value });
      if (topic) {
        throw new Error("Ya existe un tópico con ese nombre");
      }
      return true;
    }),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("La descripción no puede superar los 200 caracteres"),
];

export const updateTopicValidation = [
  param("id").isMongoId().withMessage("El ID del tópico no es válido"),

  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres")
    .bail()
    .custom(async (value, { req }) => {
      // Se permite que sea el nombre del propio tópico que se edita
      const topic = await Topic.findOne({ name: value });
      if (topic && topic._id.toString() !== req.params.id) {
        throw new Error("Ya existe un tópico con ese nombre");
      }
      return true;
    }),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("La descripción no puede superar los 200 caracteres"),
];
