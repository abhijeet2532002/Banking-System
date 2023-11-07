import mongoose from 'mongoose';
const ac_type = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Account_Type', ac_type);