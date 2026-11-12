// * ARCHIVO A COMPLETAR
// * Imports y courseIdValidation ya resueltos
import { body, param } from "express-validator";
import Course from "../../models/course.model.js";
import Topic from "../../models/topic.model.js";
import User from "../../models/user.model.js";

export const courseIdValidation = [
  param("id").isMongoId().withMessage("El ID del curso no es válido"),
];

export const createCourseValidation = [
  body("title"), // TODO 1: de 3 a 100 caracteres y único (custom con una consulta a la base).

  body("description"), // TODO 2: de 10 a 500 caracteres.

  body("level"), // TODO 3: opcional; valores permitidos: ["beginner", "intermediate", "advanced"].

  body("price"), // TODO 4: opcional; número mayor o igual a 0.

  body("schedule.day"), // TODO 5: valores permitidos: ["monday", "tuesday", "wednesday", "thursday", "friday"].

  body("schedule.startTime"), // TODO 6: fecha válida (Date), obligatoria.

  body("schedule.endTime"), // TODO 7: fecha válida (Date), obligatoria, y posterior a startTime (custom).

  body("teacher"), // TODO 8: obligatorio; ID de MongoDB válido y el teacher debe existir y estar activo, es decir, con deletedAt null (custom).

  body("topics"), // TODO 9: opcional; array cuyos IDs existan en la base (custom).
];

export const updateCourseValidation = [
  param("id"), // TODO 10: validar con isMongoId().

  body("title"), // TODO 11: igual que en la creación, pero opcional. La unicidad debe excluir al propio curso.

  body("description"), // TODO 12: igual que en la creación, pero opcional.

  body("level"), // TODO 13: igual que en la creación, pero opcional (valores permitidos: ["beginner", "intermediate", "advanced"]).

  body("price"), // TODO 14: igual que en la creación, pero opcional.

  body("schedule.day"), // TODO 15: igual que en la creación, pero opcional (valores permitidos: ["monday", "tuesday", "wednesday", "thursday", "friday"]).

  body("schedule.startTime"), // TODO 16: igual que en la creación, pero opcional.

  body("schedule.endTime"), // TODO 17: igual que en la creación, pero opcional (y posterior a startTime si ambos llegan).

  body("teacher"), // TODO 18: igual que en la creación, pero opcional.

  body("topics"), // TODO 19: igual que en la creación, pero opcional.
];
