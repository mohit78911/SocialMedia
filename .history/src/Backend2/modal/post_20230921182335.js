const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: String,
  imags: String,
  userid: String,
  userprofile: String,
  post : 
});
module.exports = mongoose.model("Post", postSchema);