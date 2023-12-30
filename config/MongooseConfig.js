import mongoose from 'mongoose';

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        // mongoose.connect('mongodb+srv://ASJ:OR17J4454@cluster0.a1i0vnk.mongodb.net/Banking', {
        mongoose.connect('mongodb://localhost:27017/Banking', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.db = mongoose.connection;
        this.db.on('error', this.onError.bind(this));
        this.db.once('open', this.onOpen.bind(this));
    }

    onError(error) {
        console.error(`There is a problem with connection: ${error}`);
    }

    onOpen() {
        console.log('Connection Established Successfully');
    }
}

export default Database;