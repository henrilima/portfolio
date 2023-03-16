const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    discriminator: { type: String, required: true },
    avatar: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    tag: { type: String, required: true },
});

const googleUser = (module.exports = mongoose.model("User", userSchema));
