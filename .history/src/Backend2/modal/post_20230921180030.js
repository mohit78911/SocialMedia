const mongoose = require("mongoose");

let Post = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  describe('', () => {
    
  })
  : String,
  email: String,
  password: String,
  userprofile: String,
});
module.exports = mongoose.model("Post", Post);