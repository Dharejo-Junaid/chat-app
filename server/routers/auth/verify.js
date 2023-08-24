const express = require("express");
const router = express.Router();
const { verifyUser } = require("../../controllers/verify");

router.get("/:token", verifyUser);
module.exports = router;