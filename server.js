require("dotenv").config();

// ---------------- //
// Dependencies 
// ---------------- //

const express = require("express");
const cors = require("cors");

// Set up express application
const app = express();

// Use Port env variable
const PORT = process.env.PORT || 5001;

// ---------------- //
// Routes 
// ---------------- //
app.get("/", (req, res) => {
  res.send("what's up ma")
});


// App Listener 
app.listen(PORT, () => {
  console.log("We are listening on Port:", PORT);
});

console.log("this is for testing purposes only");