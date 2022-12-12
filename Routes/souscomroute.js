const express = require("express");

const souscommentaire = require("../controller/souscommentcontroller");

const route = express.Router();

route.get("/", souscommentaire.ajouter);

module.exports = route;
