const express = require("express");
const router = express();
router.use(express.json());
const functionHandler = require("./Functions");
const mongoose = require("mongoose");
const path = require("path");
var cookieParser = require("cookie-parser");
const mid = require("./Midleware");
require('./config/db')
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
router.use(cookieParser());
const cors = require("cors");
router.use(cors("*"));


// router.use((req, res, next) => {
//   router.head("Access-Control-Allow-Origin", "*");
//   next();
// });

router.get("/userdata", functionHandler.getData);
router.post("/signup", cors(), functionHandler.signup);
router.post("/signin", functionHandler.signin); 
router.delete("/delete/:id", functionHandler.deleteData);
router.put("/update/:id", functionHandler.updateById);
// router.post("/like", jsonParser, functionHandler.likeActivity);

router.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "NoPage.html"));
});

module.exports = router; 
