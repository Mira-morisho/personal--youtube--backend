const express = require("express");
const notification = require("../controller/notificontrollor");

const route = express.Router();

route.get("/", notification.ajouter);

module.exports = route;
