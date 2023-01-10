const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  imageUrl: { type: String, required: true },
  linkedin: {
    type: String,
    default: "https://www.linkedin.com/in/mira-morisho-390031244/",
  },
  github: { type: String, default: "https://github.com/Mira-morisho" },
});

module.exports = mongoose.model("Users", userSchema);
