// const mongoose = require("mongoose");

// const contactSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Please Add the contact name"],
//     },
//     email: {
//         type: String,
//         required: [true, "Please Add the contact Email-Address"],
//     },
//     phone: {
//         type: String,
//         required: [true, "Please Add the contact phone number"],
//     }
// },
//     {
//         timeStamps: true,
//     }
// )

// module.exports = mongoose.model("Contact", contactSchema)

const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the contact email address"],
        },
        phone: {
            type: String,
            required: [true, "Please add the contact phone number"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);