const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../../controllers/users");

router.get("/", getAllUsers);
module.exports = router;