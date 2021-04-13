/**
 * Exercise 3: Create an HTTP web server
 */

var http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      console.log(data);
      res.end();
    });
  }
  if (req.url === "/index.js") {
    fs.readFile("index.js", (err, myData) => {
      if (err) throw err;
      res.writeHeader(200, { "Content-Type": "text/javascript" });
      res.write(myData);
      res.end();
    });
  }
  if (req.url === "/style.css") {
    fs.readFile("style.css", (err, myData) => {
      if (err) throw err;
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(myData);
      res.end();
    });
  }
});
server.listen(3000);
