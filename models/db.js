var mongoose = require("mongoose");
var connectdb = () => {
  mongoose
    .connect("mongodb://localhost:27017/contact_keeper", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    .then(() => console.log("database conmected"))
    .catch((err) => console.log(err));
};
module.exports = connectdb;
