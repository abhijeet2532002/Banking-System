import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
    machineCode: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
}, {
    timestamps: true
});

export default mongoose.model('ATM_Machine', branchSchema);