const mongoose = require("mongoose");

let likeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  like: String,
  userid: String,
});
module.exports = mongoose.model("likeSchema", Post);
