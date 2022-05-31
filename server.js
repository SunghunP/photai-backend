require("dotenv").config();
require("./config/db");

// ---------------- //
// Dependencies 
// ---------------- //

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Set up express application
const app = express();

// Use Port env variable
const PORT = process.env.PORT;

// ---------------- //
// MiddleWare
// ---------------- //
app.use(express.json()); //parse json bodies

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
