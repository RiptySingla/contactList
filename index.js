const express = require("express");
const port = 8000;
const app = express();
let ejs = require("ejs");
const db = require("./config/mongoose");
const Contact = require("./models/contact");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());
var contactList = [
  {
    name: "Rio",
    phone: "1111111111",
  },
  {
    name: "Tony Stark",
    phone: "1234567890",
  },
  {
    name: "Richard",
    phone: "12131321321",
  },
];

app.get("/", (req, res) => {
  Contact.find({}).then((result) => {
    return res.render("project", {
      title: "project",
      list: result,
    });
  });
});

//delete request
app.get("/delete/:id", (req, res) => {
  console.log(req.params);
  let id = req.params.id;
  Contact.findByIdAndRemove(id, (err) => console.log("error:", err));
  return res.redirect("back");
});

// , (err, result) => {
//   if (err) console.log(err);
//   else {
//     res.render("project", {
//       title: "project",
//       list: result,
//     });
//   }
// }
// app.get("/project", (req, res) => {
//   res.render("project", {
//     title: "project_page",
//     list: contactList,
//     user: {
//       name: "harsh",
//       course: "full stack",
//     },
//   });
// });

// app.post("/create", (req, res) => {
//   // console.log("hi post request");
//   console.log(req.body);
//   // contactList.push(req.body);
//   contactList.push({ name: req.body.name, phone: req.body.phone });
//   return res.redirect("back");
// });
app.post("/create", (req, res) => {
  Contact.create({
    name: req.body.name,
    phone: req.body.phone,
  }),
    function (err, result) {
      if (err) console.log(err);
      else console.log(result);
      return res.redirect("/");
    };
});
app.listen(port);
console.log("server is running @", port);
