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


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})