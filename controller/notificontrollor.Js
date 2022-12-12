const notification = require("../model/notifimodel");

exports.afficher = (req, res) => {
  notification.find().then((data) => res.json(data));
};
