// const asyncHandler = require("express-async-handler")
// const Contact = require("../models/contactModel")

// //@desc Get all Contacts
// //@route GET /api/Contacts
// //@access public
// const getContacts = asyncHandler(async (req, res) => {
//     const contacts = await Contact.find();
//     res.status(200).json(contacts)
// });


// //@desc Create New Contacts
// //@route POST /api/Contacts
// //@access public

// const createContact = asyncHandler(async (req, res) => {
//     console.log("The request body is: ", req.body);
//     const { name, email, phone } = req.body;
//     if (!email || !name || !phone) {
//         res.status(400);
//         throw new Error("All fields are mandatory !");
//     }
//     const contact = await Contact.create({
//         name,
//         email,
//         phone
//     });
//     res.status(201).json(contact);
// });

// //@desc get Contacts
// //@route GET /api/Contacts/:id
// //@access public
// const getContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//         res.status(404);
//         throw new Error("Concat not found");
//     }
//     res.status(200).json(contact);
// });


// //@desc Update Contacts
// //@route update /api/Contacts
// //@access public
// const updateContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//         res.status(404);
//         throw new Error("Concat not found");
//     }
//     const updatedContact = await Contact.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//     );

//     res.status(200).json(updatedContact);
// });

// //@desc Delete Contacts
// //@route Delete/api/Contacts
// //@access public
// const deleteContact = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
// });


// module.exports = {
//     getContacts,
//     createContact,
//     getContact,
//     updateContact,
//     deleteContact
// }; 


const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    });

    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};