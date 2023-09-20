const express = require("express");
const app = express();
app.use(express.json());
const functionHandler = require("./Functions");
const mongoose = require("mongoose");
const path = require("path");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cor)
mongoose.connect(
  "mongodb+srv://root:root@cluster0.au0wghs.mongodb.net/demo?retryWrites=true&w=majority"
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5500");
  next();
});

app.get("/userdata", functionHandler.getData);
app.post("/signup", functionHandler.signup);
app.post("/signin", functionHandler.signin);
app.delete("/delete/:id", functionHandler.deleteData);
app.put("/update/:id", functionHandler.updateById);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "NoPage.html"));
});

module.exports = app;
