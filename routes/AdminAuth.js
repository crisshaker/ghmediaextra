module.exports = (app) => {
  app.get("/admin/login", (req, res) => {
    res.render("admin/login");
  });

  app.get("/admin/register", (req, res) => {
    res.render("admin/register");
  });
}