const express = require("express");
const { addProfile, getProfile } = require("../controller/appProfile.js");
const router = express.Router();

router.post("/addprofile", addProfile);
router.get("/addprofile/:userId", getProfile);
module.exports = router;
