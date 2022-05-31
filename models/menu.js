const mongoose = require("mongoose");
// destructured schema and model
const { Schema, model } = mongoose;

const menuSchema = new Schema({
    // menu model
    name:        { type: String, required: true, unique: true },
    description: { type: String, maxLength: 500 },
    image:       { type: String },
    price:       { type: Number, required: true, min: [0, "The price of food must be greater than zero!"] }
});

// store model in mongoose
const Menu = model("Menu", menuSchema);

module.exports = Menu;