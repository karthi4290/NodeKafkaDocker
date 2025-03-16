import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const isDocker = true;
export const KAFKA_BROKER = isDocker
  ? process.env.KAFKA_BROKER_DOCKER
  : process.env.KAFKA_BROKER_LOCAL;
