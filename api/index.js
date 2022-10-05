import app from "./src/app.js";
import { sequelize } from "./src/db.js";


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
