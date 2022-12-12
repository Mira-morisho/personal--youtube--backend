const dislike = require("../model/likemodel");

exports.ajouter = (req, res) => {
  dislike.find().then((data) => res.json(data));
};
