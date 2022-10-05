import { Router } from "express";
import { getDepartmentsEmployees,createDepartments, deleteDepartments, getDepartments, getOneDepartments, updateDepartments  } from "../controller/departamentos.controller.js";

const router = Router()

router.get('/departamentos', getDepartments )
router.get('/departamentos/:codigo', getOneDepartments )
router.get('/departamentos/:codigo/empleados', getDepartmentsEmployees )
router.post('/departamentos', createDepartments)
router.put('/departamentos/:codigo', updateDepartments)
router.delete('/departamentos/:codigo', deleteDepartments)

export default router

