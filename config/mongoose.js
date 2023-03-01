const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/contact_list").then(() => {
  console.log("mongo db connected");
});
