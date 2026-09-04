import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error(
        "MongoDB connection string is missing. Set MONGODB_URI in the deployment environment.",
      );
    }

    await mongoose.connect(mongoUri);
    console.log("connection success⛓️⛓️⛓️");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); // 1 means failure 0 means success
  }
};
