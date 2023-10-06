const mongoose = require("mongoose");
const post = require("./post");
const like = 

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  userprofile: String,
  post: post,
  like: like,
});
module.exports = mongoose.model("User", userSchema);
