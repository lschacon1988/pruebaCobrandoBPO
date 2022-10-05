import { Departamentos } from "../models/Departamento.js";
import { Empleados } from "../models/Empleado.js";

export const getDepartments = async (req, res) => {
  try {
    const allDepartments = await Departamentos.findAll();
    res.json(allDepartments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getOneDepartments = async (req,res)=>{
    const {codigo}= req.params
    try {
        const oneDepartments = await Departamentos.findOne({
            where:{
                codigo
            }
        })
        if(!oneDepartments) {
            return res.status(404).json({message: "El departamento no existe"})
        }
        res.status(200).json(oneDepartments)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createDepartments = async (req, res) => {
  const { nombre, presupuesto } = req.body;
  try {
    const newDepartamento = await Departamentos.create({
      nombre,
      presupuesto,
    });

    res.json(newDepartamento);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDepartments = async (req,res)=>{
    const {codigo}= req.params
    const {presupuesto}=req.body
    try {
         const updateDepartments = await Departamentos.findByPk(codigo)
         updateDepartments.presupuesto = presupuesto
         await updateDepartments.save()
         res.json(updateDepartments)
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const deleteDepartments = async (req,res)=>{
    const {codigo} = req.params
   
    try {
       Departamentos.destroy({
        where: {
            codigo
        }
       }) 
       res.sendStatus(204).json('el departamento ha sido eliminado con exito')
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**En esta funcion obtendremos todos los empleados que pretenecen aun departamento */
export const getDepartmentsEmployees=async (req,res)=>{
  const {codigo}= req.params
  try {
    const employeesInDepartment = await Empleados.findAll({
      where:{
        DepartamentoCodigo: codigo
      }
    })
    if(!employeesInDepartment){
      return res.status(404).json({message: 'El departamento no cuenta con empleados asignados'})
    }
    res.status(200).json(employeesInDepartment)
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}
