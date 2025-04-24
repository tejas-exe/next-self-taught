import mongoose from "mongoose";

export const mongoConnection = async () => {
  try {
    const mongoUri = process.env.MONDO_CONNECTION;
    if (mongoose.connections[0].readyState) {
      return console.log(
        "MongoDB connection successful:",
        mongoose.connections[0].name
      );
    }
    if (!mongoUri) {
      throw new Error("MONGO_CONNECTION is not defined in the .env file");
    }

    const db = await mongoose.connect(mongoUri);
    console.log("MongoDB connection successful:", db.connection.name);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Something went wrong in DB connection");
  }
};
