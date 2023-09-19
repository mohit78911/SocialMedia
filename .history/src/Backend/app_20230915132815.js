const express = require("express");
const Data = require("./Data");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app = express();

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

app.post("/post", jsonParser, (req, res) => {
  let postingData = new Data({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    imgpost: req.body.imgpost,
    userprofile: req.body.userprofile,
  });
  postingData
    .save()
    .then((result) => {
      res.status(202).json(result);
      console.log("Data Added Successfully");
    })
    .catch((error) => {
      console.log("Error with Adding Data!!!");
    });
});

app.put("/update:id", jsonParser, (req, res) => {
  book
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          imgpost: req.body.imgpost,
          userprofile: req.body.userprofile,
          lastseen : re
        },
      }
    )
    .then((result) => {
      res.status(200).json(result);
      console.log("Data Updating Successfully");
    })
    .catch((error) => {
      console.log("Error with Updating Data");
    });
});

app.delete("/delete/:id", jsonParser, (req, res) => {
  Data.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result);
      console.log("Deleted Successfully");
    })
    .catch((error) => {
      console.log("Error With Deleting Data...");
    });
});

module.exports = app;
