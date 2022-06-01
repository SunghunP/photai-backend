const Menu = require("../models/menu")

module.exports = {
  index,
  delete: deleteMenuItem,
  update,
  create,
  show
}

// INDUCES - Index Delete Update Create Edit Show
// Index Route
async function index(req, res) {
  try {
    res.json(await Menu.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Delete Route
async function deleteMenuItem(req, res) {
  try {
    res.json(await Menu.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Update Route
async function update(req, res) {
  try {
    res.json(
      await Menu.findByIdAndUpdate(req.params.id, req.body, {new: true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

// Create Route
async function create(req, res) {
  try {
    res.json(await Menu.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Show Route
async function show(req, res) {
  try {
    res.json(await Menu.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}