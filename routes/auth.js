var router = require("express").Router();
var User = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
var protected_routes = require("../middlewares/auth");
/*
  route  -- get /api/auth
  desc   -- get the logged in user
  access private
 */
router.get("/", protected_routes, async (req, res) => {
  try {
    let user = await User.findById(req.id).select("-password");
    res.status(200).json(user);
  } catch {
    (err) => console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

/*
  route  -- post /api/users
  desc   -- the user is trying to log in
  access public
 */
router.post(
  "/",
  check("email", "eroor of username").isEmail(),
  check("password", "password length_too short").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try {
      var { password, email } = req.body;
      let user = await User.findOne({ email });

      if (!user) res.status(400).json({ error: "INVALID CREDENTIALS" });
      else {
        let ismatch = await bcrypt.compare(password, user.password);

        if (!ismatch) res.status(400).json({ msg: "INVALID CREDENTIALS" });
        else {
          jwt.sign(
            { id: user._id },
            "secretkey",
            { expiresIn: "1h" },
            (err, token) => {
              if (err) console.error(err);
              res.send(token);
            }
          );
        }
      }
    } catch {
      (err) => console.error(err);
      res.status(500).json({ msg: "server errror" });
    }
  }
);

module.exports = router;
