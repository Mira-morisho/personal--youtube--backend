const mongoose = require("mongoose");

const commentaire = mongoose.Schema(
  {
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("commentaire", commentaire);
