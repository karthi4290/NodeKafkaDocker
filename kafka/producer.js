import { Kafka } from "kafkajs";
import { KAFKA_BROKER } from "../constants.js";

const kafka = new Kafka({
  clientId: "nodejs-app",
  brokers: [KAFKA_BROKER],
});
const producer = kafka.producer();

export const runProducer = async (data) => {
  try {
    await producer.connect();
    await producer.send({
      topic: "post-topic",
      messages: [{ value: JSON.stringify(data)}],
    });
    return true;
  } catch (error) {
    console.log(error);
  } finally {
    await producer.disconnect();
  }
};
