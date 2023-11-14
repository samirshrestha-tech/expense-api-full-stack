import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    if (!process.env.MONGO_URL) {
      return console.log("THE MONGO DB IS NOT CONNECTED ");
    }
    const conn = await mongoose.connect(process.env.MONGO_URL);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
