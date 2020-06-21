var router = require("express").Router();
var User = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
//var config = require("../config/default.json");
const { check, validationResult } = require("express-validator");
const user = require("../models/user");
/*
  route  -- get /api/users
  desc   -- get all the contacts of a user
  access --public
 */
router.post(
  "/",
  check("email", "error of username").isEmail(),
  check("name", "pleae add name")
    .not()
    .isEmpty(),
  check("password", "password length_too short").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array()[0] });
    }
    try {
      var { password, name, email } = req.body;
      var user = await User.findOne({ email });
      console.log("popop");
      if (user) res.status(400).json({ error: { msg: "user already exist" } });
      var salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      user = new User({
        password,
        email,
        name,
      });

      await user.save();

      jwt.sign(
        { id: user._id },
        "secretkey",
        { expiresIn: "1h" },
        (err, token) => {
          if (err) console.error(err);
          console.log("works");
          res.json({ token: token, user: user.id });
        }
      );
    } catch {
      (err) => res.status(400).json({ error: { msg: "server EROOR!!" } });
    }
  }
);
module.exports = router;
