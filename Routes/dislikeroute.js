const express = require("express");
const dislike = require("../controller/dislikecontrollor");

const route = express.Router();

route.get("/", apprenant.afficher);

module.exports = route;
