const mongoose = require("mongoose");

let likeData = new mongoose.Schema({
    _id : mongoose.sc
  like: Number,
  unlike: Number,
});

module.exports = mongoose.model("LikeData", likeData);

