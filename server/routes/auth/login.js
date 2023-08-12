const express = require("express");
const router = express.Router();
const { userLogin } = require("../../controller/login");
const cookieParser = require("cookie-parser");

router.use(cookieParser());
router.post("/", userLogin);

module.exports = router;