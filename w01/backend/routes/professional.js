const router = require('express').Router();

const prof = require('../controllers/professionals');

router.get('/', prof.professional);

module.exports = router;