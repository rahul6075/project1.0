// Enviorment Variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect localDtabase
mongoose.connect("mongodb://localhost:27017/projectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Init MiddleWare
app.use(express.json({ extended: false }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Api running");
});

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, function (req, res) {
  console.log("server is runninag on port", { PORT });
});
