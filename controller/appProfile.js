const mongoose = require("mongoose");
const Profile = require("../models/profile.js");
// const jwt = require("jsonwebtoken");

exports.addProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.body.userId });
    if (profile) {
      res.status(200).json(profile._doc);
    } else {
      const newProfile = new Profile({
        ...req.body,
      });
      const savedProfile = await newProfile.save();
      res.status(200).json(savedProfile._doc);
    }
  } catch (err) {
    next(err);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (profile) {
      res.status(200).json(profile._doc);
    } else {
      res.status(404);
    }
  } catch (err) {
    next(err);
  }
};
