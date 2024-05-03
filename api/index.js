import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(`${process.env.MONGODB}`)
  .then(() => console.log("Mongodb Connected"))
  .catch((e) => console.log(e));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
