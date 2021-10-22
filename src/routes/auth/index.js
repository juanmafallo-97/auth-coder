const router = require("express").Router();
const path = require("path");
const passport = require("../../utils/passport");
const AuthController = require("../../controllers/AuthController");

router.get("/login", AuthController.getLogin);

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/auth/failLogin" }),
  AuthController.postLogin
);

router.get("/failLogin", AuthController.failLogin);

router.get("/signup", AuthController.getSignup);

router.post(
  "/signup",
  passport.authenticate("signup", { failureRedirect: "/failSignup" }),
  AuthController.postSignup
);

router.get("/failSignup", AuthController.failSignup);

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
