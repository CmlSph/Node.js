const express = require("express");
const app = express();

app.use(express.json()); //for parsing json in request body

const fs = require("fs");

app.get("/blogs/:title", (req, res) => {
  // How to get the title from the url parameters?
  // check if post exists
  const title = req.params.title;
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    // send response
    res.end(post);
  } else {
    res.end("No such blog");
  }
});

app.delete("/blogs/:title", (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  console.log(title);
  if (fs.existsSync(title)) {
    // Add condition here
    fs.unlinkSync(title);
    res.end("Ok! The content is deleted!");
  } else {
    // Respond with message here
    res.end("No such blog");
  }
});

app.put("/blogs/:title", (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  if (isInvalid(req)) {
    res.status(400);
    res.send("invalid request");
    return;
  }
  const title = req.body.title;
  const content = req.body.content;
  // if (fs.existsSync(title)) console.log(title);

  if (req.body.title === req.params.title) {
    fs.writeFileSync(title, content);
    res.end(`Ok! The content of the title "${title}" has been updated!`);
  } else {
    // Send response with error message
    res.end("This post does not exist!");
    return;
  }
});

app.post("/blogs", (req, res) => {
  // How to get the title and content from the request??
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end("ok. The first blog is created");
});

function isInvalid(req) {
  if (
    typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.content == "undefined"
  ) {
    return true;
  } else {
    return false;
  }
}

app.listen(3000);
