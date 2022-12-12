const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(
      `mongodb+srv://Mira-Morisho:Mira2303@cluster0.5iyrik9.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("connexion à mongoose reussie"))
    .catch(() => console.log("connexion à mongose echouée"));
};

module.exports = connectDb;
