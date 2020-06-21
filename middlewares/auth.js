var express = require("express");
var jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  let token = req.header("x-auth-token");
  if (token) {
    var ver = jwt.verify(token, "secretkey", (err, token) => {
      if (err) res.status(403).json({ msg: "token expired" });
      else {
        req.id = token.id;
        next();
      }
    });
  } else res.status(401).json({ msg: "token not sent" });
};
