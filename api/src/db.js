import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const {  PGUSER,  PGPASSWORD,  PGHOST, PGDATABASE,PGPORT } = process.env;

export const sequelize = new Sequelize(
PGDATABASE, 
PGUSER, 
PGPASSWORD,
 {
  port:PGPORT,
  host: PGHOST,
  dialect: "postgres",
}
);
