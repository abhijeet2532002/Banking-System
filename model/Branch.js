import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
    branchCode: {
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
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    customer:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'customer' 
    }]
}, {
    timestamps: true
});

export default mongoose.model('Branch', branchSchema);