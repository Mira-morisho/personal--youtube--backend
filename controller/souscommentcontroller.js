const souscommentaire = require("../model/souscommentmodel");

exports.ajouter = (req, res) => {
  souscommentaire.find().then((data) => res.json(data));
};
