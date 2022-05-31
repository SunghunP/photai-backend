const express = require("express");
const router = express.Router();
const menuCtrl = require("../controllers/menu");

// INDUCES ROUTES //
router.get("/", menuCtrl.index); // index route
router.post("/", menuCtrl.create); // create route

module.exports = router;