import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const sequelize = new Sequelize(
"entidad", 
DB_USER, 
DB_PASSWORD,
 {
  host: `localhost`,
  dialect: "postgres",
}
);
