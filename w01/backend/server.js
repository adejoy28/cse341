const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('./db/connect');

const express = require('express'),
    app = express(),
    port = process.env.PORT,
    cors = require('cors');

app.use(cors());
app.use('/', require("./routes"));


mongodb.initDb((err) => {
    if (!err) {
        app.listen(port)
        console.log("You are connected to db and currently listening to port: " + port);
    } else {
        console.log('Database connection failed' + err);
    }
});