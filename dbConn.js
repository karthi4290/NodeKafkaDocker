import mongoose from "mongoose";


export const mongoDBConnection = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("connect mongoDB server");
  } catch (error) {
    console.log("failed to connect mongoDB", error);
  }
};