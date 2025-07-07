const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const router = express.Router();
const app = express();

app.get('/', (req, res) => {
    res.send('John Adebayo');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
