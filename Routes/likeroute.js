const express = require("express");
const like = require("../controller/likecontroller");

const route = express.Router();

route.get("/", like.ajouter);

module.exports = route;
