import mongoose from 'mongoose';
const cardChema = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ATM_Type"
    },
    expire: {
        type: String,
        required: true
    },
    CSV: {
        type: String,
        required: true
    },
    ATM_NO: {
        type: String,
        required: true
    },
    transaction: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }]
}, {
    timestamps: true
});

const ATM_Card = mongoose.model('ATM', cardChema);
export default ATM_Card;
