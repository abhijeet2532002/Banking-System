import mongoose from 'mongoose';

const checkSchema = new mongoose.Schema({
    checkNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Check_Type'
    },
    acount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    starting_page: {
        type: Number,
        required: true
    },
    ending_Page: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "ACTIVE"
    }
}, {
    timestamps: true
})

const Check_Book_db = mongoose.model('Check_Book', checkSchema);

export default Check_Book_db;