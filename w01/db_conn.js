// Import MongoDB
const { MongoClient } = require('mongodb');

async function main() {
    // Code goes here
    // Create a connection string i.e URL

    const uri = "mongodb+srv://johnayomide31:6IL0h2A6ApC1ejpk@cluster0.ykzgmfz.mongodb.net/";

    // Create an instance of the URI

    const client = new MongoClient(uri);

    try {

        await client.connect();

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}


main().catch(console.error);
