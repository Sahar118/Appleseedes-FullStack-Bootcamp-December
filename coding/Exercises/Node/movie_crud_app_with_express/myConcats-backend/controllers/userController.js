const asyncHandler = require("express-async-handler")
//@desc Register a user
//@routePost / api / users/ register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" });
});

//@desc Login a user
//@routePost / api / users/ login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "login  user" });
});

//@desc current user info
//@route Post / api / users/ current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "current user information" });
});

module.exports = { registerUser, loginUser, currentUser }