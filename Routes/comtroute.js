const express = require("express");
const commentaire = require("../controller/commentcontroller");

const router = express.Router();

router.post("/add", commentaire.addComment);

module.exports = router;
