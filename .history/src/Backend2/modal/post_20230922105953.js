const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: String,
  imags: String,
  userprofile: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
});
module.exports = mongoose.model("Post", postSchema);