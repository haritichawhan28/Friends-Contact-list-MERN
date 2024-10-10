const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
const userRouter = require("./routes/userRoute");

app.use(express.json());
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("api running");
// });

mongoose
  .connect("mongodb://localhost:27017/userData")
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("Server running at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error");
  });

app.use(userRouter);
