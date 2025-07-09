'use strict';
const routes = require('express').Router();


routes.use('/professional', require('./professional'));


// router.get('/john', prof.john);

module.exports = routes;


// module.exports((app) => {
//     const prof = require('../controllers/professionals');

//     app.route('/professional')
//         .get(prof.get_all_prof);
// })