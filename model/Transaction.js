import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    method: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel1'
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Success",
        required: true
    },
    type: {
        type: String,
        enum: ['Withdrawal', 'Deposit']
    },
    code: {
        type: Number,
        refPath: "onModel2"
    },
    onModel1: {
        type: String,
        enum: ['Account', 'ATM']
    },
    onModel2: {
        type: String,
        enum: ['Branch', 'ATM_Machine']
    }
},{
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;