const dotenv = require('dotenv');
dotenv.config();
const express = require('express'),
    route = express.Router('express'),
    app = express(),
    port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port);

console.log('Backend is listening to Port: ' + port);