const express = require("express");
const router = express.Router();

// @route       GET api/products
// @desc        Get all products
// access       Private

router.get("/", (req, res) => {
  res.send("Get all products");
});

// @route       POST api/products
// @desc        Add new product
// access       Private

router.post("/", (req, res) => {
  res.send("Add product");
});
// @route       DELETE api/products/:id
// @desc        Delete product
// access       Private

router.delete("/:id", (req, res) => {
  res.send("Delete product");
});
module.exports = router;
