import { Router } from "express";

import { createEmployees, deleteEmployees, getEmployees, getOneEployees, updateEmployees } from "../controller/empleados.controller.js";

const router = Router()

router.get('/empleados', getEmployees  )
router.get('/empleados/:codigo', getOneEployees )
router.post('/empleados', createEmployees )
router.put('/empleados/:codigo', updateEmployees )
router.delete('/empleados/:codigo', deleteEmployees )

export default router