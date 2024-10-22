const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },

        email:{
            type: String,
            unique: true,
            required: true
        },

        password:{
            type: String,
            required: true
        },

        age:{
            type: Number,
            required: true,
            min: 0
        },

        blogs:{
            type: Array,
            default: []
        },

        created_at:{
            type: Date,
            default: Date.now
        }
    }
)

const User = mongoose.model("User", UserSchema)

module.exports = User;