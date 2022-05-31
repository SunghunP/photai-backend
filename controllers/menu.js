const Menu = require("../models/menu")

module.exports = {
  index,
  create,
}

// INDUCES - INdex Delete Update Create Edit Show
async function index(req, res) {
  try {
    res.json(await Menu.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    res.json(await Menu.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}
