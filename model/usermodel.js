const mongoose = require("mongose");
const users = mongoose.Schema({
  non: { type: String },
  mail: { type: String },
  numTel: { type: Number },
});
