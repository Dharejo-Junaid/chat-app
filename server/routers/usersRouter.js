const express = require("express");
const router = express.Router();
const {
    getUsers, getFriends, getRequests
} = require("../controllers/usersController");

router.get("/get-users", getUsers);
router.get("/get-friends", getFriends);
router.get("/get-requests", getRequests);
module.exports = router;