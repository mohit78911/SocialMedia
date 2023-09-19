const express = require("express");
const Data = require("./Data");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app = express();
const port = process.env.PORT || 3500;

mongoose.connect(
  "mongodb+srv://root:root@cluster0.au0wghs.mongodb.net/demo?retryWrites=true&w=majority"
);

app.get("/userdata", (req, res) => {
  Data.find()
    .then((result) => {
      res.status(200).json(result);
      console.log("Data Fetch Successfully");
    })
    .catch((error) => console.log("Error with fetching data"));
});


app.post("/post",(req,res)=>{
let postingData = new b
})