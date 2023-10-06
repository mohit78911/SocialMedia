const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: String,
  imags: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref
  },
  userprofile: String,
  
});
module.exports = mongoose.model("Post", postSchema);