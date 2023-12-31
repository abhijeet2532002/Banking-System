import mongoose from 'mongoose';

const AC_Schema = new mongoose.Schema({
    accountNo: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        unique: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account_Type"
    },
    balance: {
        type: Number,
        required: true
    },
    check: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CheckBook"
    },
    ATM: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ATM"
    }],
    status: {
        type: String,
        default: "OPEN",
        required: true
    },
    transaction: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }]
}, {
    timestamps: true
})

const Account = mongoose.model('Account', AC_Schema);
export default Account;