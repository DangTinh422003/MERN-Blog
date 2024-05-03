import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(`${process.env.MONGODB}`)
  .then(() => console.log("Mongodb Connected"))
  .catch((e) => console.log(e));

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
