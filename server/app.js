const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 2000;
app.get("/", (req, res) => {
  res.send("Api running");
});

app.listen(PORT, function (req, res) {
  console.log("server is runninag on port", { PORT });
});
