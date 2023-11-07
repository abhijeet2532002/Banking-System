import mongoose from 'mongoose';

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect('mongodb://127.0.0.1:27017/Banking', {
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