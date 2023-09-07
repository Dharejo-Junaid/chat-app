const User = require("../models/user");

const getAllUsers = async (req, res) => {
    const _id = req._id;

    const allUsers = await User.find(
        { isVerified: true }, { username: true }
    );
    
    const currUser = await User.findById(_id.toString());
    const friends = currUser.friends;

    // remove our friends and user it self;
    const remUsers = allUsers.filter(
        (user) => !friends.include(user._id) && user_id !== _id.toString()
    );
    
    res.json({
        status: "success",
        data: remUsers,
        message: "users found successfully"
    });
}

module.exports = { getAllUsers };