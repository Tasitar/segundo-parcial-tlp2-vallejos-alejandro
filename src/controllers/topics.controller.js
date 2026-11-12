// * ARCHIVO A COMPLETAR
// * CRUD de tópicos ya resuelto: solo falta la eliminación en cascada dentro de remove
import { matchedData } from "express-validator";
import Topic from "../models/topic.model.js";
import Course from "../models/course.model.js";

export const create = async (req, res) => {
  try {
    const data = matchedData(req);

    const topic = await Topic.create(data);

    return res
      .status(201)
      .json({ message: "Tópico creado correctamente", data: topic });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", data: null });
  }
};

export const getAll = async (req, res) => {
  try {
    const topics = await Topic.find().populate("courses", "title level");

    return res
      .status(200)
      .json({ message: "Tópicos obtenidos correctamente", data: topics });
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

    const topic = await Topic.findById(id).populate("courses", "title level");

    if (!topic) {
      return res
        .status(404)
        .json({ message: "Tópico no encontrado", data: null });
    }

    return res
      .status(200)
      .json({ message: "Tópico obtenido correctamente", data: topic });
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

    const topic = await Topic.findById(id);

    if (!topic) {
      return res
        .status(404)
        .json({ message: "Tópico no encontrado", data: null });
    }

    Object.assign(topic, data);
    await topic.save();

    return res
      .status(200)
      .json({ message: "Tópico actualizado correctamente", data: topic });
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

    const topic = await Topic.findByIdAndDelete(id);

    if (!topic) {
      return res
        .status(404)
        .json({ message: "Tópico no encontrado", data: null });
    }

    // TODO 1: eliminación en cascada, de forma manual: al eliminar un Topic, quitarlo del array topics de todos los cursos que lo referencian. Se busca la lista de cursos que contienen el tópico, se recorre con un bucle, a cada curso se le quita el tópico de su array topics (reasignando el array sin ese id) y se guarda el curso.

    return res
      .status(200)
      .json({ message: "Tópico eliminado correctamente", data: null });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", data: null });
  }
};
