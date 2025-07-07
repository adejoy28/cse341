'use strict';

module.exports((app) => {
    const prof = require('../controllers/professionals');

    app.route('/professional')
        .get(prof.get_all_prof);
})