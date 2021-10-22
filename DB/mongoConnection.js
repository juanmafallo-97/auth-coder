//Conexión a la base de datos para mantener usuarios

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/passportlocal", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Conectado a MongoDB exitosamente");
});
mongoose.connection.on("error", (err) => {
  console.log("Error conectando a MongoDB", err);
});

module.exports = mongoose.connection;
