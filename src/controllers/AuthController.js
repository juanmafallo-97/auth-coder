const path = require("path");

const getLogin = (req, res) => {
  if (req.isAuthenticated()) {
    console.log("Usuario logueado");
    res.render("home", {
      username: req.user.displayName || req.user.username,
      foto: req.user.photos[0].value
    });
  } else {
    console.log("El usuario no está registrado");
    res.render("login");
  }
};

const postLogin = (req, res) => {
  const user = req.user;
  console.log(user.firstName);
  res.sendFile(path.resolve() + "/views/index.html");
};

const failLogin = (req, res) => {
  console.log("Error en el login");
  res.render("login-error", {});
};

const getSignup = (req, res) => {
  res.sendFile(path.resolve() + "/views/signup.html");
};

const postSignup = (req, res) => {
  const user = req.user;
  res.sendFile(path.resolve() + "/views/index.html");
};

const failSignup = (req, res) => {
  console.log("Error en el registro");
  res.render("signup-error", {});
};

module.exports = {
  getLogin,
  postLogin,
  failLogin,
  getSignup,
  postSignup,
  failSignup
};
