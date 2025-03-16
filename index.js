import express from "express";
import { addData } from "./controller.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { errorMiddleware } from "./errorMiddleware.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/test/:id", addData);
app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log("started listening to the port", PORT);
});
