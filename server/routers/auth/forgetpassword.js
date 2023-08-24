const express = require("express");
const forgetpassword = require("../../controllers/forgetpassword");
const router = express.Router();

router.post("/", forgetpassword);
module.exports = router;