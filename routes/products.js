const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Product = require("../models/Product");
// @route       GET api/products
// @desc        Get all products
// access       Private

router.get("/", auth, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/products
// @desc        Add new product
// access       Private

router.post(
  "/",
  [
    auth,
    check("name", "Name is required").not().isEmpty(),
    check("img", "Image is required").not().isEmpty(),
    check("price", "Price is required").not().isEmpty(),
    check("saving", "Saving is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, img, price, saving, type } = req.body;

    try {
      const newProduct = new Product({
        name,
        img,
        price,
        saving,
        type,
        user: req.user.id,
      });
      const product = await newProduct.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route       DELETE api/products/:id
// @desc        Delete product
// access       Private

router.delete("/:id", auth, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({
        msg: "Contact not found",
      });

    // Make dure uder owns product
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    await Product.findByIdAndRemove(req.params.id);
    res.json({ msg: "Product removed " });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
