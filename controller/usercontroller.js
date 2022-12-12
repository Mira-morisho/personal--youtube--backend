const user = require("../model/usermodel");

exports.afficher = (req, res, next) => {
  user.find({ email: req.body.email
  
  })
  .then((user) => re;s.json(data));
};
