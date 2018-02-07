module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/admin/login", (req, res) => {
    res.render("admin/login");
  });

  app.get("/admin/register", (req, res) => {
    res.render("admin/register");
  });
}