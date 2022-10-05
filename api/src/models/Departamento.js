import { DataTypes } from "sequelize";

import { sequelize } from "../db.js";
import { Empleados } from "./Empleado.js";


export const Departamentos = sequelize.define('Departamentos',{
    codigo:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV1
    },
    nombre:{
        type:DataTypes.STRING(100)
    },
    presupuesto:{
        type: DataTypes.DOUBLE
    }
},{timestamps: false})

/** estamos estableciondo una relacion de uno a muchos
 * donde un departamento puede tener muchos empleados y 
 * un empleado puede pertenecer solo aun departamento 
 */
Departamentos.hasMany(Empleados,{
    foreingKey: 'codigo_departamento',
    sourceKey: 'codigo'
})

Empleados.belongsTo(Departamentos,{
    foreingKey: 'codigo_departamento',
    targetId: 'codigo'
})