import mongoose from "mongoose"

const Remove = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
        },

        name: {
            type: String,
        },

        amount: {
            type: Number,
        },

    },
    {
        timestamps: true
    },
    { collection: 'removeData' }
)

const RemoveModel = mongoose.model('RemoveModel', Deposit)

export default RemoveModel