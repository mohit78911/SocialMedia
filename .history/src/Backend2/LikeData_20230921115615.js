const mongoose = require("mongoose");

let likeData = new mongoose.Schema({
  like: Number,
  unlike: Number,
});

module.exports = mongoose.model('LikeData')