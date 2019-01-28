// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path =require("path");

// Initializing App
const PORT = process.env.PORT || 5000;
const app = express();

app.use(routes);

// Body Parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connecting to PORT
app.listen(PORT, function() {
  console.log(`Server Listening On Port : ${PORT}`);
});
