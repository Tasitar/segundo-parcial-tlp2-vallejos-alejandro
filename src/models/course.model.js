// * ARCHIVO A COMPLETAR
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    // TODO 1: title (String, único, obligatorio, de 3 a 100 caracteres).

    // TODO 2: description (String, obligatorio, de 10 a 500 caracteres).

    // TODO 3: level (String, valores permitidos: ["beginner", "intermediate", "advanced"]; por defecto "beginner").

    // TODO 4: price (Number, mínimo 0, por defecto 0).

    // TODO 5: schedule: documento embebido 1:1. El campo schedule es un objeto que contiene tres campos propios,
    // cada uno con su definición:
    //   - day: String, obligatorio, valores permitidos: ["monday", "tuesday", "wednesday", "thursday", "friday"].
    //   - startTime: Date, obligatorio.
    //   - endTime: Date, obligatorio.

    // TODO 6: teacher (ObjectId, obligatorio, referencia al modelo User).

    // TODO 7: topics (array de ObjectId con referencia al modelo Topic).
  },
  { timestamps: true, versionKey: false },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
