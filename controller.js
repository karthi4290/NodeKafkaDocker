import axios from "axios";
import dotenv from "dotenv";
import { runProducer } from "./kafka/producer.js";
import { asyncHandler } from "./errorHandler.js";
dotenv.config({ path: "./.env" });

export const addData = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const response = await axios.get(process.env.DATA_FETCH_URL);
  const data = response.data;
  const filteredData = data.filter((post) => post.userId === ida);
  await runProducer(filteredData);
  res.status(201).json({
    success: true,
    message: "successfully saved in mongodb through kafka consumer",
    postedData: filteredData,
  });
});
