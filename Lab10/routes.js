const uuidv4 = require("uuid/v4");
const auth = require("../lab11/auth");
const cookies = require("./cookies");

module.exports = app => {
  app.get("/", cookies.pushThroughCookie, (req, res) => {
    res.render("layouts/home");
  });

  app.post("/login", (req, res) => {
    // if(user && auth.passwordsMatch(req.body.password, auth.getUserAtIndex(user).hashedPassword)) {
    const usern = req.body.username;
    const passwordSent = req.body.password;
    const passwordInDB = auth.getPassword(usern);
    if (passwordInDB && auth.passwordsMatch(passwordSent, passwordInDB)) {
      const sessionId = uuidv4();
      auth.setSession(usn, sessionId);
      cookies.setCookie(res, sessionId);
      res.redirect("/private");
    } else res.render("layouts/home", { error: true });
  });

  app.get("/private", cookies.pullBackCookie, (req, res) => {
    res.render("layouts/user", auth.getUserFromSession(cookies.getCookie(req)));
  });

  app.get("/logout", cookies.pullBackCookie, (req, res) => {
    cookies.expireCookie(res);
    res.render("layouts/link", { title: "Logged Out" });
  });
};
