const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const connectDb = require("./connexion");
const bodyParser = require("body-parser");
const commentaireRoute = require("./Routes/comments");

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

app.use(cors());

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //Listen when user disconnecting
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/commentaire", commentaireRoute);

http.listen(3001, () => {
  console.log("pret à écouter le requetes au port 3001");
});
