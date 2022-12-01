// Import Router
const router = require("express").Router();

// Import Middlware functions
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// Import Product model
const Product = require("../models/Product");

// Create Product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body); //creating an object of Product model

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // take everything from req.body and set it again
      },
      { new: true } // to return updated Product otherwise it will not return
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Product -> beside admin, users , and also guest can see products
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Prducts -> beside admin, users , and also guest can see products
router.get("/", async (req, res) => {
  // Get only x latest products
  const qNew = req.query.new; // fetch last 5 products
  const qCategory = req.query.category; //fetch products by category

  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
