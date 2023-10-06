const mongoose = require("mongoose");

let Post = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dE: String,
  imags: String,
  user: String,
  userprofile: String,
});
module.exports = mongoose.model("Post", Post);