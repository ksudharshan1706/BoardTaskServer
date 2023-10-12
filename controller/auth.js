const mongoose = require("mongoose");
const User = require("../models/users.js");
const jwt = require("jsonwebtoken");

exports.googleAuth = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      //   const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
        // .cookie("access_token", token, {
        //   httpOnly: true,
        // })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      // const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        // .cookie("access_token", token, {
        //   httpOnly: true,
        // })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};
