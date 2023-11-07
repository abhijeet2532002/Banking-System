import mongoose from 'mongoose';

const atmSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    ATM: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ATM"
    }]
}, {
    timestamps: true
});

const ATM_Type = mongoose.model('ATM_Type', atmSchema);
export default ATM_Type;