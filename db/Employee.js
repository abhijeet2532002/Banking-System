const mongoose = require('mongoose');
const empShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Branch
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
  timestamps: true
});
const Employee = mongoose.model('employee', empShema);
module.exports = Employee;