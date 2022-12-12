const mongoose = require("mongoose");

const notification = mongoose.Schema(
  {
    message: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("notification", notification);
