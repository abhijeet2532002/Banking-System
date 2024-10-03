import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB_URL = process.env.db_url;


class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(DB_URL, {
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