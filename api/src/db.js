import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST,DATABASE } = process.env;

export const sequelize = new Sequelize(
DATABASE, 
DB_USER, 
DB_PASSWORD,
 {
  host: DB_HOST,
  dialect: "postgres",
}
);
