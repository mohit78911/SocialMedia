const express = require("express");
const app = express();
app.use(express.json());
const functionHandler = require("./Routes/Functions");
const mongoose = require("mongoose");
const path = require("path");
var cookieParser = require("cookie-parser");
const mid = require("./Midleware");
require("./config/db");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(cookieParser());
const cors = require("cors");
app.use(cors("*"));

// app.use((req, res, next) => {
//   app.head("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use()
app.get("/userdata", functionHandler.getData);
app.post("/signup", cors(), functionHandler.signup);
app.post("/signin", functionHandler.signin);
app.delete("/delete/:id", functionHandler.deleteData);
app.put("/update/:id", functionHandler.updateById);
// app.post("/like", jsonParser, functionHandler.likeActivity);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "NoPage.html"));
});

module.exports = app;
