const mongoose = require("mongoose");

const like = mongoose.Schema({
  idCommentaire: { type: String },
  idUser: { type: String },
});

module.exports = mongoose.model("like", dislike);
