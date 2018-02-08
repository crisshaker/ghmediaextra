module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  require("./routes/AdminAuth")(app);
}