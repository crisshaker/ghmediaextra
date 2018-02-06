const express = require("express");
const pug = require("pug");

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

require("./router")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));