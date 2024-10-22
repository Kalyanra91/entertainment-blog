const express = require("express");
const helper = require("../Helper/Helper");
const User = require("../Model/UserSchema");

const router = express.Router();

// get profile
router.get("/profile/:username", async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username: username })
        if (user) {
            return res.status(200).send(user)
        }
        res.status(404).send("User Not Found")
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e })
    }
})

module.exports = router;