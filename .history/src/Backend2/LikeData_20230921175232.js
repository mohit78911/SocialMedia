const mongoose = require("mongoose");

let likeData = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: Number,
  post
  unlike: Number,
});

module.exports = mongoose.model("LikeData", likeData);
