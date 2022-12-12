const Commentaire = require("../model/commentmodel.js");

module.exports.addComment = (req, res, next) => {
  const commentaire = new Commentaire({
    description: req.body.description,
  });
  commentaire
    .save()
    .then(() => {
      res.status(201).json({ message: "commentaire enregistré" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
