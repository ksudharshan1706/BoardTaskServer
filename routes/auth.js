const express = require("express");
const router = express.Router();
const { googleAuth } = require("../controller/auth.js");

router.post("/google", googleAuth);

module.exports = router;
