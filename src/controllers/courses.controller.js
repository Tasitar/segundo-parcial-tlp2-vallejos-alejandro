// * ARCHIVO A COMPLETAR
// * Estructura de cada método ya resuelta: try-catch, lectura de datos, manejo de errores y respuesta final
// * Solo falta la consulta a la base de datos con Mongoose en cada método
import { matchedData } from "express-validator";
import Course from "../models/course.model.js";

export const create = async (req, res) => {
  try {
    const data = matchedData(req);
    let course;

    // TODO 1: crear el curso con los datos validados (data), que incluyen el teacher y los topics. Guardar el resultado en course.

    return res
      .status(201)
      .json({ message: "Curso creado correctamente", data: course });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", data: null });
  }
};

export const getAll = async (req, res) => {
  try {
    let courses;

    // TODO 2: consultar todos los cursos con populate del teacher (traer solo su username) y de los topics. Guardar el resultado en courses.

    return res
      .status(200)
      .json({ message: "Cursos obtenidos correctamente", data: courses });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", data: null });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = matchedData(req);
    let course = null;

    // TODO 3: consultar el curso por id con populate del teacher (traer solo su username) y de los topics. Guardar el resultado en course.

    if (!course) {
      return res
        .status(404)
        .json({ message: "Curso no encontrado", data: null });
    }

    return res
      .status(200)
      .json({ message: "Curso obtenido correctamente", data: course });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", data: null });
  }
};

export const update = async (req, res) => {
  try {
    const { id, ...data } = matchedData(req);
    let course = null;

    // TODO 4: actualizar el curso: buscarlo por id, asignar los datos validados (data) a sus campos, incluidos los topics, guardarlo con save() y devolver el curso actualizado. Guardar el resultado en course.

    if (!course) {
      return res
        .status(404)
        .json({ message: "Curso no encontrado", data: null });
    }

    return res
      .status(200)
      .json({ message: "Curso actualizado correctamente", data: course });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", data: null });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = matchedData(req);
    let course = null;

    // TODO 5: eliminar físicamente el curso por id. Guardar el resultado en course.

    if (!course) {
      return res
        .status(404)
        .json({ message: "Curso no encontrado", data: null });
    }

    return res
      .status(200)
      .json({ message: "Curso eliminado correctamente", data: null });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", data: null });
  }
};
