const express = require("express");
const app = express();
app.use(express.json());
const functionHandler = require("./Functions");
const mongoose = require("mongoose");
const path = require("path");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors");
app.use(cors("*"));

mongoose.connect(
  "mongodb+srv://root:root@cluster0.au0wghs.mongodb.net/demo?retryWrites=true&w=majority"
);
// app.use((req, res, next) => {
//   app.head("Access-Control-Allow-Origin", "*");
//   next();
// });

app.get("/userdata", functionHandler.getData);
app.post("/signup", cors((req,res,next)=>{
  res
}), functionHandler.signup);
app.post("/signin", functionHandler.signin);
app.delete("/delete/:id", functionHandler.deleteData);
app.put("/update/:id", functionHandler.updateById);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "NoPage.html"));
});

module.exports = app;
