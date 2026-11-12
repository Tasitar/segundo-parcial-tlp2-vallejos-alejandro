// * ARCHIVO A COMPLETAR
import mongoose from "mongoose";

// * Perfil embebido (1:1): ya implementado
const profileSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    // * username, email, password, role y profile: ya implementados
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "teacher"], default: "student" },
    profile: { type: profileSchema, required: true },

    // TODO 1: agregar el campo deletedAt para la eliminación lógica (tipo Date, valor por defecto null).
    daletedAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true, versionKey: false },
);

// TODO 2: definir el virtual populate "courses": cursos cuyo campo teacher referencia a este usuario.

// TODO 3: configurar toJSON y toObject para que incluyan los virtuals.
profileSchema.set("toJSON", { virtuals: true });
profileSchema.set("toObject", { virtuals: true });

profileSchema.virtual("course", {
  ref: "Course",
  localField: "_id",
  foreignField: "users",
});



const User = mongoose.model("User", userSchema);

export default User;
