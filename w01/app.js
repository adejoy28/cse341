const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const router = express.Router();
const app = express();
// // using app route

// // app.get('/', (req, res) => {
// //     res.send('This is the index page or route');
// // });

// /**
//  * Using Router
//  * i.e express.Router();
//  */
// const router = express.Router();

// router.get('/home', (req, res) => {
//     res.send('Hello World, This is home router');
// });

// router.get('/login', (req, res) => {
//     res.send('This is login router');
// });

// router.get('/profile', (req, res) => {
//     res.send('This is profile router')
// });

// router.get('/logout', (req, res) => {
//     res.send('This is logout router');
// });

// // app.use('/', router);




// /**
//  * Using Middleware
//  * 1. Application
//  * 2. Error-handline
//  * 3. Router
//  * 4. Built-in
//  * 5. Third-Party
//  *
// */

// // Application Middleware
// // app.use((req, res, next) => {
// //     console.log('Time:', Date.now());
// //     next();
// // });


// router.use((req, res, next) => {
//     console.log('Time:', Date.now());
//     next();
// });

// // router.get('/home', (req, res) => {
// //     res.send('OK');
// // });


// // Adding Middeleware before the routes

// app.use(bodyParser.json());
// app.use('/', router);


// app.use(session({ secret: 'ssssshhhh!', saveUninitialized: true, resave: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// var sess;

// router.get('/', (req, res) => {
//     sess = req.session;
//     if (sess.email) {
//         return res.redirect('/admin');
//     }
//     res.send('ok');
// });

// router.post('/login', (req, res) => {
//     sess = req.session;
//     sess.email = req.body.email;
//     res.end('done');
// })

// router.get('/admin', (req, res) => {
//     sess = req.session;
//     if (sess.email) {
//         res.write(`Hello ${sess.email}`);
//         res.end('Logout');
//     } else {
//         res.write('Please login first');
//         res.end('Login');
//     }

//     router.get('/logout', (req, res) => {
//         req.session.destroy((err) => {
//             if (err) {
//                 return console.log(err);
//             }
//             res.redirect('/');
//         });
//     });
// });

// app.use('/', router);



/**
 * Database Integration in Node.js
 * 
 */

const pool = mySql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medium',
    debug: false,
});

pool.query('Select * from users limit 10', (err, rows) => {
    if (err) {
        console.log('Error occured druing connection.');
    }
    console.log(rows[0]);
})





app.listen(process.env.PORT || 3000, () => {
    console.log('Web server is listening at port ' + (process.env.PORT || 3000));
});