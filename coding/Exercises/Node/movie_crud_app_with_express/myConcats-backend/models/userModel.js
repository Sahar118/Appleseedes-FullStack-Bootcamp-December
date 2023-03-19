const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please ass the user name"]
    },
    email: {
        type: String,
        required: [true, "please ass the email"],
        unique: [true, "Email address already taken "]
    }
})