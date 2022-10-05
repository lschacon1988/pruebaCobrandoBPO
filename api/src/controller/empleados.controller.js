import { Empleados } from "../models/Empleado.js";

export const getEmployees = async (req, res) => {
  try {
    const allEmployees = await Empleados.findAll();
    res.status(200).json(allEmployees);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getOneEployees= async (req,res) =>{
    const {codigo}= req.params
try {
    const oneEployees = await Empleados.findOne({
        where:{
            codigo
        }
    })
    if(!oneEployees){
        return res.status(400).json({message: 'El empleado no pertenece a la empresa'})
    }
    res.status(200).json(oneEployees)
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}

export const createEmployees = async (req, res) => {
  const employees = req.body;
  try {
    console.log(employees);
    const newEmployees = await Empleados.create(employees);
    res.status(200).json(newEmployees);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEmployees = async (req,res)=>{
    const {codigo}= req.params
    const employees =req.body
    try {
         const updateEmployees = await Empleados.findByPk(codigo)
         updateEmployees.set(employees)
         await updateEmployees.save()
         res.json(updateEmployees)
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const deleteEmployees = async (req,res)=>{
    const {codigo} = req.params
    console.log(codigo)
    try {
       Empleados.destroy({
        where: {
            codigo
        }
       }) 
       res.sendStatus(204).json('El empleado ha sido eliminado con exito')
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
