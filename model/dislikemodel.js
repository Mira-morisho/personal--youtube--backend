const mongoose = require("mongoose");

const dislike = mongoose.Schema({
  idComentaire: { type: String },
  idUser: { type: String },
});

module.exports = mongoose.model("dislike", dislike);
