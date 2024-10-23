// enviornment
require('dotenv').config()

// express
const express = require('express')
const app = express()
app.use(express.json())

// cors
const cors = require('cors')
app.use(cors())

// database
require('./Database/Db')

// images
app.use('/avatar', express.static('./public/images/avatar'))

// controllers
const AuthController = require('./Controller/AuthController')
app.use(AuthController)

const UserController = require('./Controller/UserController')
app.use(UserController)

// get users
const User = require('./Model/UserSchema')
app.get('/users', (req, res) => {
    User.find().then((response) => {
        res.status(200).json(response)
    }).catch((e) => {
        res.status(500).json({ message: e })
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})