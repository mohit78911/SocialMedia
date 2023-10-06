const mongoose = require("mongoose");
const post = require("./post");

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  userprofile: String,
   
});
module.exports = mongoose.model("User", userSchema);
