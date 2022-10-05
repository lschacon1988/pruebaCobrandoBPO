import express from "express";

import departmentsRoutes from "./routes/departments.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";


const app = express()

app.use(express.json())
app.use(departmentsRoutes)
app.use(empleadosRoutes)



export default app