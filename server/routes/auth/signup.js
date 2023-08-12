const express = require("express");
const { createAccount } = require("../../controller/signup");
const auth = require("../../middleware/auth");
const router = express.Router();

router.post("/", createAccount);

module.exports = router;