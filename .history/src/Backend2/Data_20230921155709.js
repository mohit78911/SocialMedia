const mongoose = require("mongoose");

let newData = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  lastseen: String,
  imgpost: String,
  userprofile: String,
  like: Number,
  comment : St
  // unlike: Number--,
});
module.exports = mongoose.model("Data", newData);
