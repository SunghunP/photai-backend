const express = require("express");
const router = express.Router();
const menuCtrl = require("../controllers/menu");

// INDUCES ROUTES //
router.get("/", menuCtrl.index); // index route
router.get("/seed", menuCtrl.seed) // seed data 
router.get("/:id", menuCtrl.show); // show route
router.put("/:id", menuCtrl.update); // update route
router.post("/", menuCtrl.create); // create route
router.delete("/:id", menuCtrl.delete); // delete route

module.exports = router;