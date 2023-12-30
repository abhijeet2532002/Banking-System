const mongoose = require('mongoose');
const loanType = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    intrest: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Loan_Type = mongoose.model('loanType', loanType);
module.exports = Loan_Type;