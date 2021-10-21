const router = require("express").Router();
const path = require("path");
const passport = require("../../utils/passport");

router.get("/login", (req, res) => {
  res.sendFile(path.resolve() + "/public/login.html");
});

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/session/failLogin"
  })
);

router.get("/failLogin", (req, res) => {
  console.log("Login error");
  res.render("login-error", {});
});

module.exports = router;
