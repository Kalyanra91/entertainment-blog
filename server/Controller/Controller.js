const express = require("express");
const helper = require("../Helper/Helper");
const User = require("../Model/UserSchema");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { username, email, age, password, confirmPassword } = req.body;
        const dataExist = await User.findOne({ email: email });
        if (dataExist) {
            return res.status(409).send("User Already Exist");
        }
        if (confirmPassword !== password) {
            return res.status(401).send("Passwords donot match");
        }
        const hashed_password = await helper.hashPassword(password);
        const newUser = new User({
            username,
            email,
            password: hashed_password,
            age,
        });

        const response = await newUser.save()
        if (response) {
            return res.status(200).send(response)
        }
        res.status(500).send("Internal Server Error")
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e })
    }
});

module.exports = router;