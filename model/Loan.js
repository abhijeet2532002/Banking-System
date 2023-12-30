const mongoose = require('mongoose');
const loanSchema = new mongoose.Schema({
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Loan_Type
    },
    amount: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    instalment_Amount: {
        type: String,
        required: true
    },
    installment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Installment
    }],
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Account
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Branch
    }
}, {
    timestamps: true
});
const Loan = mongoose.model('loan', loanSchema);
module.exports = Loan;