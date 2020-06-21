var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  connectdb = require("./models/db");
connectdb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ msg: "welcome to api" });
});
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));
app.listen(5000 || process.env.PORT, () => {
  console.log("server has started");
});
