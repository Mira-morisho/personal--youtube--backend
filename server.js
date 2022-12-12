const express = require("express");
const app = express();
const connectDb = require("./connexion");
const bodyParser = require("body-parser");
const commentaireRoute = require("./Routes/comtroute");

connectDb();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/commentaire", commentaireRoute);

app.listen(3003, "localhost", () => {
  console.log("pret à écouter le requetes au port 3001");
});
