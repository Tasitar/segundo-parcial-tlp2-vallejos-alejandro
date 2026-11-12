// ! ARCHIVO BASE: no modificar
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import topicsRoutes from "./src/routes/topics.routes.js";
import coursesRoutes from "./src/routes/courses.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/topics", topicsRoutes);
app.use("/api/courses", coursesRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
