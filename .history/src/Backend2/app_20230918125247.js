const express = require("express");
const app = express();
app.use(express.json());
const functionHandler = require("./Functions");
 const mongoose = require('mong')
const path = require("path");

mongoose.connect(
  "mongodb+srv://root:root@cluster0.au0wghs.mongodb.net/demo?retryWrites=true&w=majority"
);

app.get("/userdata", functionHandler.getData);
app.post("/signup", functionHandler.signup);
app.post("/signin", functionHandler.signin);
app.delete("/delete/:id", functionHandler.deleteData);
app.put("/update/:id", functionHandler.updateById);

//this is html page

app.set("view engine", "ejs");
 
app.use("/inputfield", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "nopage.html"));
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Mohit",
    email: "mohit2suthar@gmail.com",
    city: "Ahmedabad",
  };
  res.sendFile("profile", { user });
});

app.get("/value", (req, res) => {
  res.json({ result: "hello Node js" });
});

module.exports = app;
