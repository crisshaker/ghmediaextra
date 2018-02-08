const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");

module.exports = app => {
  app.get("/admin/login", (req, res) => {
    res.render("admin/login");
  });

  app.post("/admin/login", async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      // check if email already exists
      const existingUser = await Admin.findOne({ email });
      if (!existingUser) {
        return res.send("invalid email");
      }

      existingUser.isCorrectPassword(password, function(err, matching) {
        if (err) return res.send(err.message);
        if (!matching) return res.send("incorrect correct");

        req.session.userId = existingUser._id;
        return res.send(req.session.userId);
      });
    } else {
      return res.send("all fields required");
    }
  });

  app.get("/admin/register", (req, res) => {
    res.render("admin/register");
  });

  app.post("/admin/register", async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        return res.send("passwords do not match");
      }

      // check if email already exists
      const existingUser = await Admin.findOne({ email });
      if (existingUser) {
        return res.send("email already taken");
      }

      // create a new user
      const user = await Admin.create({
        email,
        password
      });
      req.session.userId = user._id;
      return res.send(req.session.userId);
    } else {
      return res.send("all fields required");
    }
  });
};
