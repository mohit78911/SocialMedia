const mongoose = require("mongoose");

let  = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: String,
  imags: String,
  userid: String,
  userprofile: String,
});
module.exports = mongoose.model("Post", Post);