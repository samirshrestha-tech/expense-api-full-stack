import "dotenv/config";
// to mask the port address and the data in the api
import express from "express";
import cors from "cors";
import { connectMongo } from "./configs/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());

// database connection

connectMongo();

// use capital letter to denote const that are not meant to be changed

// create app.use to respond here

// api endpooint for transaction

// routers
import userRouter from "./src/router/userRouter.js";

// middleway for userRouter

app.use("/api/v1/user", userRouter);

app.use("/api/v1/trans", (req, res) => {
  res.json({
    message: "you called transaction api",
  });
});

// api endpoint for users

app.use("/api/v1/user", (req, res) => {
  res.json({
    message: "you called user api",
  });
});

app.use("/", (req, res) => {
  res.json({
    message: "server is running well",
  });
});
// error handling at one place and notify the errors

app.use((error, req, res, next) => {
  // log

  const errorCode = error.errorCode || 500;

  res.status(errorCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("your server is running at http://localhost:" + PORT);
});
