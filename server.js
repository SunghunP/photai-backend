require("dotenv").config();
require("./config/db");

// ---------------- //
// Dependencies 
// ---------------- //

const express = require("express");
const cors = require("cors");

// Set up express application
const app = express();

// Use Port env variable
const PORT = process.env.PORT;

// ---------------- //
// MiddleWare
// ---------------- //
app.use(cors()); // prevent cors errors, open access to all origins
app.use(express.json()); //parse json bodies

// ---------------- //
// Routes 
// ---------------- //
const menuRouter = require("./routes/menu");
app.use("/menu", menuRouter);

// App Listener 
app.listen(PORT, () => {
  console.log("We are listening on Port:", PORT);
});
