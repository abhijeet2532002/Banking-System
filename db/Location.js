import mongoose from "mongoose";
const locationSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    branch: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch"
    }]
}, {
    timestamps: true
});
const Location = mongoose.model('Location', locationSchema);
export default Location;