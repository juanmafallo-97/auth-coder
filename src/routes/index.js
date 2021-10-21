const router = require("express").Router();
const apiRouter = require("./api");
const authRouter = require("./auth");

router.get("/datos", (req, res) => {
  if (req.isAuthenticated()) {
    if (!req.user.contador) req.user.contador = 0;
    req.user.contador++;
    res.render("datos", {
      nombre: req.user.displayName,
      foto: req.user.photos[0].value,
      contador: req.user.contador
    });
  } else {
    res.redirect("/auth/login");
  }
});

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/datos");
  } else {
    res.redirect("/auth/login");
  }
});

router.use("/api", apiRouter);
router.use("/auth", authRouter);

module.exports = router;
