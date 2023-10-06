const mongoose = require("mongoose");

let likeData = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuser_: Number,
  unlike: Number,
});

module.exports = mongoose.model("LikeData", likeData);
