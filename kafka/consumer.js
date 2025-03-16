import { Kafka } from "kafkajs";
import { postModel } from "../modelPost.js";
import { KAFKA_BROKER } from "../constants.js";
import { mongoDBConnection } from "../dbConn.js";

const kafka = new Kafka({
  clientId: "my-consumer",
  brokers: [KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: "post-group" });

const runConsumer = async () => {
  try {
    await mongoDBConnection(process.env.MONGO_URL);
    await consumer.connect();
    await consumer.subscribe({ topic: "post-topic", fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ message }) => {
        const dataLoad = JSON.parse(message.value.toString());
        await postModel.insertMany(dataLoad);
      }
    });
  } catch (error) {
    console.log("errorMessage", error.message);
  }finally {
    await consumer.disconnect();
  }
};

runConsumer().catch((error) => console.log("runConsumerERROR", error));
