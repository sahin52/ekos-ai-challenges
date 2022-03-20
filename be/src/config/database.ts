import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI!, {
    })
    .then(() => {
      console.log("Successfully connected to Mongo database");
    })
    .catch((error) => {
      console.log("Mongo database connection failed");
      console.error(error);
      process.exit(1);
    });
};
