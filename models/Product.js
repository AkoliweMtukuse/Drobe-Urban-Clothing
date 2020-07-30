const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  saving: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "Men",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", ProductSchema);
