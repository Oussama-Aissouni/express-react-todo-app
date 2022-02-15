const express = require("express");
const connectDB = require("./db/connect");
const todos = require("./routes/todos");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,PATCH,POST,DELETE",
  })
);
const port = process.env.PORT || 5000;
app.use(express.static("./public"));
app.use(express.json());
app.use("/todos", todos);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
