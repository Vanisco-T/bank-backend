import mongoose from "mongoose"
const User = new mongoose.Schema(
    {
        f_name: {
            type: String,
            required: true,
        },

        l_name: {
            type: String,
            required: false,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        contact: {
            type: Number,
            required: true,
        },
        balance: {
            type: Number,
        },

    },
    {timestamps: true},
    { collection: 'userData' }
)

const UserModel = mongoose.model('UserModel', User)

export default UserModel