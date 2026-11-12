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
  body("title")
  .isLength({ min: 3, max: 100 })
  .custom(async (title) => {
            const titleid = await Course.findOne({ title });
            if (titleid) throw new Error("Ya existe un titulo con ese nombre");
        })
  , // TODO 1: de 3 a 100 caracteres y único (custom con una consulta a la base).
  

  body("description")
  .isLength({ min: 10, max: 500 })
  , // TODO 2: de 10 a 500 caracteres.

  body("level")
  .optional()
  .isIn(["beginner", "intermediate", "advanced"])
  , // TODO 3: opcional; valores permitidos: ["beginner", "intermediate", "advanced"].


  body("price")
  .optional()
  , // TODO 4: opcional; número mayor o igual a 0.

  body("schedule.day")
  .isIn(["monday", "tuesday", "wednesday", "thursday", "friday"])
  , // TODO 5: valores permitidos: ["monday", "tuesday", "wednesday", "thursday", "friday"].

  body("schedule.startTime") 
  .notEmpty()
    .isDate({ format: "YYYY-MM-DD", strictMode: true })
, // TODO 6: fecha válida (Date), obligatoria.

  body("schedule.endTime")
  .notEmpty()
    .isDate({ format: "YYYY-MM-DD", strictMode: true })
  , // TODO 7: fecha válida (Date), obligatoria, y posterior a startTime (custom).

  body("teacher")
  .notEmpty()
  , // TODO 8: obligatorio; ID de MongoDB válido y el teacher debe existir y estar activo, es decir, con deletedAt null (custom).
  body("topics")
  .optional()
  , // TODO 9: opcional; array cuyos IDs existan en la base (custom).
];

export const updateCourseValidation = [
  param("id")  
  .isMongoId()
  .custom(async (id) => {
      const existingUser = await User.findById(id);
      if (!existingUser) {
        throw new Error("El usuario no existe");
      }
      return true;
    })
, // TODO 10: validar con isMongoId().


  body("title")
  .isLength({ min: 3, max: 100 })
  .optional()
  .custom(async (title) => {
            const titleid = await Course.findOne({ title });
            if (titleid) throw new Error("Ya existe un titulo con ese nombre");
        })
  , // TODO 11: igual que en la creación, pero opcional. La unicidad debe excluir al propio curso.

  body("description")
   .optional()   
  .isLength({ min: 10, max: 500 })
  , // TODO 12: igual que en la creación, pero opcional.


  body("level").optional()   .isIn(["beginner", "intermediate", "advanced"]), // TODO 13: igual que en la creación, pero opcional (valores permitidos: ["beginner", "intermediate", "advanced"]).

  body("price") .optional(), // TODO 14: igual que en la creación, pero opcional.

  body("schedule.day").optional()  .isIn(["monday", "tuesday", "wednesday", "thursday", "friday"])
 , // TODO 15: igual que en la creación, pero opcional (valores permitidos: ["monday", "tuesday", "wednesday", "thursday", "friday"]).

  body("schedule.startTime").optional() .isDate({ format: "YYYY-MM-DD", strictMode: true })
 ,  // TODO 16: igual que en la creación, pero opcional.

  body("schedule.endTime").optional() .isDate({ format: "YYYY-MM-DD", strictMode: true })
, // TODO 17: igual que en la creación, pero opcional (y posterior a startTime si ambos llegan).

  body("teacher").optional() .notEmpty()
, // TODO 18: igual que en la creación, pero opcional.

  body("topics").optional(), // TODO 19: igual que en la creación, pero opcional.
];
