const mongoose = require("mongoose");

let Post = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  like: String,

  userid: String,
});
module.exports = mongoose.model("Post", Post);
