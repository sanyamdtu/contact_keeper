var router = require("express").Router();
var protect = require("../middlewares/auth");
var contacts = require("../models/contacts");
var mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
/*
  route  -- get /api/contacts
  desc   -- get all the contacts of a user
  access private
 */
router.get("/", protect, async (req, res) => {
  try {
    var contact = await contacts.find({ user: req.id });
    res.status(200).json({ info: contact });
  } catch {
    (err) => {
      console.error(err);
      res.status(500).json({ error: "server error" });
    };
  }
});

/*
  route  -- post /api/users
  desc   -- register new number from yhe user
  access private
 */
router.post(
  "/",
  protect,
  check("name", "please addname")
    .not()
    .isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, number, type } = req.body;
      var newcontact = new contacts({
        user: req.id,
        name,
        email,
        number,
        type,
      });
      let newc = await newcontact.save();
      res.json(newc);
    } catch {
      (err) => {
        console.error(err);
        res.status(500).json({ error: "server error" });
      };
    }
  }
);

/*
  route  -- put /api/contacts
  desc   -- change the number of the user
  access private
 */

router.put("/:id", protect, (req, res) => {
  res.json({ msg: "updating the number" });
});

/*
  route  -- delete /api/contacts
  desc   -- delete the number
  access private
 */
router.delete("/:id", protect, (req, res) => {
  res.json({ msg: "deleting the new number" });
});
module.exports = router;
