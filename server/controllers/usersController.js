const User = require("../models/User");
const FirendRequest = require("../models/FriendRequest");

const getUsers = async (req, res) => {
    const _id = req._id;

    const allUsers = await User.find(
        { isVerified: true }, { _id: true, username: true, avatar: true }
    );
    
    const currUser = await User.findById(_id);
    const friends = currUser.friends || [];

    // remove our friends and user it self;
    const remUsers = allUsers.filter(
        (user) => !friends.includes(user._id) && user._id.toString() !== _id
    );
    
    res.json({
        severity: "success",
        data: remUsers,
        message: "users found successfully"
    });
}

const getFriends = async (req, res) => {
    const _id = req._id;

    const currUser = await User.findById(_id.toString())
        .populate("friends").select("_id username email");

    res.json({
        severity: "success",
        data: currUser.friends,
        message: "users found successfully"
    });
}

const getRequests = async (req, res) => {
    const _id = req._id;

    const allRequests = await FirendRequest.find(
        { recipient: _id }, { sender: true, createdAt: true }
    ).populate("sender", "username avatar");

    console.log("allRequests", allRequests);
    
    res.json({
        severity: "success",
        data: allRequests,
        message: "users found successfully"
    });
}



module.exports = { getUsers, getFriends, getRequests };