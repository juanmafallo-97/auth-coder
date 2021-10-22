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

const getLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};

const failLogin = (req, res) => {
  console.log("Error en el login");
  res.render("login-error", {});
};

const getSignup = (req, res) => {
  res.render("signup");
};

const failSignup = (req, res) => {
  console.log("Error en el registro");
  res.render("signup-error", {});
};

module.exports = {
  getLogin,
  getLogout,
  failLogin,
  getSignup,
  failSignup
};
