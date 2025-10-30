const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promo.controller');

router.post('/validate', promoController.validate);

module.exports = router;
