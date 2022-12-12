const mongoose = require("mongoose");
const souscommentaire = mongoose.Schema(
  {
    descriptionsouscom: { type: String },
  },
  {
    timestamps: true,
  }
);
