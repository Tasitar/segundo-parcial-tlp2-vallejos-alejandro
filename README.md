# Parcial TLP II – API de gestión de cursos

API REST con **Express**, **Mongoose (MongoDB)** y **express-validator** (ESModules).

## Instalación y configuración

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear el archivo `.env` a partir de `.env.example` y completar los valores:

   ```bash
   cp .env.example .env
   ```

   | Variable      | Descripción                                                          |
   | ------------- | -------------------------------------------------------------------- |
   | `PORT`        | Puerto del servidor (ej.: `3000`)                                    |
   | `MONGODB_URI` | Cadena de conexión (ej.: `mongodb://127.0.0.1:27017/parcial_cursos`) |

3. Tener MongoDB corriendo en local y levantar el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

   Para producción: `npm start`.

## Formato de respuestas

Todas las respuestas son JSON con la forma `{ message, data }`.

| Código | Significado                                   |
| ------ | --------------------------------------------- |
| 200    | Consulta, actualización o eliminación exitosa |
| 201    | Recurso creado                                |
| 400    | Error de validación                           |
| 404    | Recurso inexistente                           |
| 500    | Error inesperado                              |

## Endpoints

Todos los endpoints son públicos (la API no tiene autenticación).

### Users

La API no tiene endpoints de usuarios. Para probar los cursos hay que cargar un usuario directamente en MongoDB (por ejemplo con mongosh) y usar su `_id` como `teacher`:

```js
db.users.insertOne({
  username: "docente1",
  email: "docente1@mail.com",
  password: "Password123",
  role: "teacher",
  profile: { firstName: "Ana", lastName: "Gomez" },
  deletedAt: null,
});
```

### Topics – `/api/topics`

| Método | Ruta   | Descripción                                          |
| ------ | ------ | ---------------------------------------------------- |
| GET    | `/`    | Listar tópicos (incluye sus cursos)                  |
| GET    | `/:id` | Obtener un tópico (incluye sus cursos)               |
| POST   | `/`    | Crear un tópico                                      |
| PUT    | `/:id` | Actualizar un tópico                                 |
| DELETE | `/:id` | Eliminar un tópico (se quita de los cursos que lo usan) |

### Courses – `/api/courses`

| Método | Ruta   | Descripción                    |
| ------ | ------ | ------------------------------ |
| GET    | `/`    | Listar cursos                  |
| GET    | `/:id` | Obtener un curso               |
| POST   | `/`    | Crear un curso                 |
| PUT    | `/:id` | Actualizar un curso            |
| DELETE | `/:id` | Eliminar un curso              |

## Postman

Importar `postman/collection.json`. La variable `baseUrl` apunta a `http://localhost:3000`. Ejecutar la colección de arriba hacia abajo: las variables (`topicId`, `courseId`...) se completan solas, salvo `teacherId`: pegá ahí el `_id` del usuario que cargaste en MongoDB.

## Estructura

```
app.js
src/
├── config/        conexión a MongoDB
├── middlewares/   validator y validations/
├── models/        user, topic, course
├── controllers/   topics, courses
└── routes/        un router por recurso
```
