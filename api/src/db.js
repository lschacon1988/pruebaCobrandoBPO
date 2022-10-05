import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const {  PGUSER,  PGPASSWORD,  PGHOST, PGDATABASE } = process.env;

export const sequelize = new Sequelize(
PGDATABASE, 
PGUSER, 
PGPASSWORD,
 {
  host: PGHOST,
  dialect: "postgres",
}
);
