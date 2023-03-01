{
  // // // const fs = require("fs");
  // // // const read = fs.readdir("", function (err, files) {
  // // //   if (err) console.log(err);
  // // //   else console.log(files);
  // // // });
  // // const EventEmitter = require("events");
  // // const emitter = new EventEmitter();
  // // //Listening events
  // // emitter.on("message1", () => console.log("message1"));
  // // emitter.on("message2", () => console.log("message2"));
  // // //Raising events
  // // emitter.emit("message2");
  // // emitter.emit("message");
  // const http = require("http");
  // const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     res.write("Hello World");
  //     const a = [1, 2];
  //     res.write(JSON.stringify(a));
  //     // console.log(res);
  //     res.end();
  //   }
  //   //   if (req.url === "/api/courses") {
  //   //     const a = "f";
  //   //     res.write();
  //   //     // res.end();
  //   //     // console.log(res);
  //   //   }
  // });
  // server.listen(3000);
  // // server.on("connection", () => console.log("new connection"));
  // console.log("listening on port 3000");
}
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3000, () => console.log("Listening to port 3000"));
