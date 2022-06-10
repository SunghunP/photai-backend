const mongoose = require("mongoose");
// destructured schema and model
const { Schema, model } = mongoose;

const menuSchema = new Schema({
    // menu model
    itemNumber: { type: Number, required: true, unique: true, },
    menuItemTag: { type: String, maxLength: [4, "Character length must be 4 or lower."]},
    name:        { type: String, required: true },
    vietName:    { type: String },
    desc:        { type: String, maxLength: 500 },
    // img:         { type: String },
    price:       { type: Number, required: true, min: [0, "The price of food must be greater than zero!"] },
    foodType:    { type: String }
});

// store model in mongoose
const Menu = model("Menu", menuSchema);

module.exports = Menu;