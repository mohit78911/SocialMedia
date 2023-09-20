const express = require("express");
const app = express();
app.use(express.json());
const functionHandler = require("./Functions");
const mongoose = require("mongoose");
const path = require("path");
var cookieParser = require("cookie-parser");
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://root:root@cluster0.au0wghs.mongodb.net/demo?retryWrites=true&w=majority"
);

app.get("/userdata", functionHandler.getData);
app.post("/signup", functionHandler.signup);
app.post("/signin", functionHandler.signin);
app.delete("/delete/:id", functionHandler.deleteData);
app.put("/update/:id", functionHandler.updateById);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "NoPage.html"));
});

app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
});

module.exports = app;
