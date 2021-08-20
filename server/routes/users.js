const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/Users");
const Post = require("../models/Posts");

// Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // hashing the password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(14);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your account!");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (error) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can only delete your account!");
  }
});

// Get User
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
