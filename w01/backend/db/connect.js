const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;


let database;

const initDb = (callback) => {
    if (database) {
        console.log('Db is already initialised!');
        return callback(null, database);
    }

    MongoClient.connect(process.env.MongoDB_URI)
        .then((client) => {
            database = client.db();
            callback(null, database);
        })
        .catch((err) => {
            // console.log('Error ' + err);
            callback(err);
        });
};

const getDb = () => {
    if (!database)
        throw Error('Database is not initialized - ' + database);
    return database;
}

module.exports = {
    initDb,
    getDb
};

