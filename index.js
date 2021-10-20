/* Para que la aplicación funcione se debe tener una base de datos llamada "productsdb" en localhost, y correr los scripts para crear las tablas necesarias */

const express = require("express");
const session = require("express-session");
const passport = require("./src/utils/passport");
const handlebars = require("express-handlebars");
const socketConfig = require("./src/utils/socket");
const apiRouter = require("./src/routes/api");
const authRouter = require("./src/routes/auth");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost/4000"]
  }
});
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    cookie: {
      maxAge: 600000
    },
    secret: "secreto",
    rolling: true,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", "./views");

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);

/*  Config del socket  */
socketConfig(io);

app.use("/api", apiRouter);
app.use("/api/session", authRouter);

app.get("/", (req, res) => {
  res.render("home");
});

httpServer.listen(PORT, () =>
  console.log("Servidor activo en puerto: " + PORT)
);
