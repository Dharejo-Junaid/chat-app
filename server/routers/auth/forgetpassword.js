const express = require("express");
const router = express.Router();
const forgetpassword = require("../../controllers/forgetpassword");

router.post("/", forgetpassword);
module.exports = router;