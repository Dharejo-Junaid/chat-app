const User = require("../models/user");
const FirendRequest = require("../models/friendRequest");

const getUsers = async (req, res) => {
    const _id = req._id;
    // const _id = "64f80bde4b71a7412ab18454";

    const allUsers = await User.find(
        { isVerified: true }, { username: true }
    );
    
    const currUser = await User.findById(_id.toString());
    const friends = currUser.friends;

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
    // const _id = "64f80bde4b71a7412ab18454";

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
    // const _id = "64f80bde4b71a7412ab18454";

    const allRequests = await FirendRequest.find(
        { recipient: _id }, { sender: true, createdAt: true }
    );
    
    res.json({
        severity: "success",
        data: allRequests,
        message: "users found successfully"
    });
}



module.exports = { getUsers, getFriends, getRequests };