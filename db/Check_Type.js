import mongoose from 'mongoose';

const checkTyeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    check: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "check"
    }]
}, {
    timestamps: true
});

const Check_Type = mongoose.model('Check_Type', checkTyeSchema);
export default Check_Type;