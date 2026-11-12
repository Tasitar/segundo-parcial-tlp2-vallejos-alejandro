// ! ARCHIVO BASE: no modificar
import { validationResult } from "express-validator";

// Se coloca después de las validaciones: si hay errores responde 400
export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Errores de validación",
      data: errors
        .array()
        .map((error) => ({ campo: error.path, mensaje: error.msg })),
    });
  }

  next();
};
