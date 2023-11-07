const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true
    },
    method: {
        
    }
}, {
  timestamps: true
});
const fileName = mongoose.model('', transactionSchema);
module.exports = fileName;