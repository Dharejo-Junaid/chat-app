const express = require("express");
const router = express.Router();
const resetPassword = require("../../controllers/resetpassword");

router.post("/", resetPassword);
module.exports = router;