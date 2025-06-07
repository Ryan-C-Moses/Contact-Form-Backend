import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    mongoose.connection.on("error", (err) => {
      console.log("Error after connection: " + err.message);
      console.log("\n" + err);
    });
  } catch (error) {
    console.log("Error with Database connection: " + error.message);
    console.log("\n" + error);
  }
};

export default connectDB;