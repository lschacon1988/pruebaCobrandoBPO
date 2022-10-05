import { DataTypes } from "sequelize";

import { sequelize } from "../db.js";


/**define la estructura del modelo de empleados en la
 * en la base de datos
*/
export const Empleados = sequelize.define('empleados',{
    codigo:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,

    },
    nif:{
        type: DataTypes.STRING(9)
    },
    nombre:{
        type: DataTypes.STRING(100)
    },
    apellido1:{
        type:DataTypes.STRING(100)
    },
    apellido2:{
        type: DataTypes.STRING(100)
    },
   


},{timestamps: false})