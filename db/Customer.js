import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch"
    },
    proof: {
        type: String,
        required: true
    },
    account:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
}, {
    timestamps: true
});

const Customer = mongoose.model('customer', customerSchema);
export default Customer;