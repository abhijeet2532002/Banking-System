import db from 'mongoose';

const checkSchema = new db.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Check_Type'
    },
    acount: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }],
    starting_page : {
        type: String,
        required: true
    },
    ending_Page : {
        type: String,
        required:true
    },
    pages: {
        type : String,
        required: true
    }
},{
    timestamps: true
})

const Check_Book_db = db.model('Check_Book',checkSchema);
export default Check_Book_db;