const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const randomId = require("random-id");
const app = express(),
  bodyParser = require("body-parser");
port = 3080;

// CONFIG
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/dist")));

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

// ROUTES
app.get("/", (req, res) => {
  const messages = require("./mockData/messages");

  // Stuur 'messages' terug als response op request
  res.send(messages)
});
