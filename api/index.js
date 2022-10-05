import app from "./src/app.js";
import dotenv from "dotenv";
import { sequelize } from "./src/db.js";
dotenv.config()

/**punto de entrada de la app levanta la app */

const PORT = process.env.PORT || 1234;

async function main() {
  try {
    await sequelize.sync({force: false});
    
    app.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
