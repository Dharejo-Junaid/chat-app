const express = require("express");
const { createAccount } = require("../../controllers/signup");
const router = express.Router();

router.post("/", createAccount);

module.exports = router;