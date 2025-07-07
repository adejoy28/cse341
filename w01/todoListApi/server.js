const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
mongoose.connect('mongodb+srv://johnayomide31:6IL0h2A6ApC1ejpk@cluster0.ykzgmfz.mongodb.net/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// adding middleware to handle wrong url endpoints within the server
// app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }));

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.get('/api', (req, res) => {
    console.log('id: ' + req.query.id)
    res.send('id: ' + req.query.id);
});

app.listen(port);

console.log(`todo List RESTful API server started on: ${port}`);
