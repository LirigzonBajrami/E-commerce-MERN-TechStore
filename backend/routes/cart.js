// Import Router
const router = require("express").Router();

// Import Middlware functions
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// Import Cart model
const Cart = require("../models/Cart");

// Create Cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body); //creating an object of Cart model

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // take everything from req.body and set it again
      },
      { new: true } // to return updated Cart otherwise it will not return
    );

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User Cart ->users can see their own cart
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get ALL Carts -> only admin can see all carts of all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find(); // return all user carts
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
