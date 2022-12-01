// Import Router
const router = require("express").Router();

// Import Middlware functions
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// Import User model
const User = require("../models/User");

// Update User
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  // If request is to change password encrypt that
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // take everything from req.body and set it again
      },
      { new: true } // to return updated user otherwise it will not return
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete User
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User -> Only admin can get any user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All User -> Only admin can get all user
router.get("/", async (req, res) => {
  // Get only x latest users
  const query = req.query.new;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER STATS -> only admin can get stats( how many register users per month)
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date(); // current date
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: { month: { $month: "$createdAt" } },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 }, // sum every register user
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
