const mongoose = require("mongoose");

let UserSh = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  userprofile: String,
});
module.exports = mongoose.model("User", newData);