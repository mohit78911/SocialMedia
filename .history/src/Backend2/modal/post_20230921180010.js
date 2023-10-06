const mongoose = require("mongoose");

let Post = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

});
module.exports = mongoose.model("Post", Post);