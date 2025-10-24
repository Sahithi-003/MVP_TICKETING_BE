import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "./config/db";
import app from "./app";
dotenv.config();

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(`DB connection error:`, err));
