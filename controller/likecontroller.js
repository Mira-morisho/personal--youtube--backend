const like = require("../model/likemodel");

exports.ajout = (req, res) => {
  like.find().then((data) => res.json(data));
};
