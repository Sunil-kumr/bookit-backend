const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings.controller');

router.post('/', bookingsController.create);

module.exports = router;
