require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

// ---------------- //
// Database Connection (DB) **deez
// ---------------- //
mongoose.connect(DATABASE_URL);

// connection messages
const db = mongoose.connection
    .on("connected", () => console.log("database connected :-)"))
    .on("disconnected", () => console.log("FAILED database not connected :'-("))
    .on("error", (error) => console.log(error));

module.exports = db;