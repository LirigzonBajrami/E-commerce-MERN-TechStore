// Import Router
const router = require("express").Router();

// Import Middlware functions
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// Import Order model
const Order = require("../models/Order");

// Create Order
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body); //creating an object of Order model

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // take everything from req.body and set it again
      },
      { new: true } // to return updated Order otherwise it will not return
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User Orders
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get ALL orders -> only admin can get all orders of all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find(); // return all user orders
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY Income stats
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date(); // current date: ex November
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); //October
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)); // September

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
