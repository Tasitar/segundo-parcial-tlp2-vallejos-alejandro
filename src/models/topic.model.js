// * ARCHIVO A COMPLETAR
import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    // TODO 1: definir name (String, único, obligatorio, de 2 a 50 caracteres) y description (String, opcional, máximo 200 caracteres).
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 50,        
    },
    description: {
        type: String,
        maxlength: 200,        
    },
  },
  { timestamps: true, versionKey: false },
);

// TODO 2: definir el virtual populate "courses": cursos que incluyen este tópico en su array topics.

// TODO 3: configurar toJSON y toObject para que incluyan los virtuals.
profileSchema.set("toJSON", { virtuals: true });
profileSchema.set("toObject", { virtuals: true });

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;
