const mongoose = require("mongoose");
const post = require('./')

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  userprofile: String,
  post : 
});
module.exports = mongoose.model("User", userSchema);