const mongoose = require('mongoose');
const installmentSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true
    },
    loan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Loan
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Account
    }
}, {
  timestamps: true
});
const Installment = mongoose.model('installment', installmentSchema);
module.exports = Installment;