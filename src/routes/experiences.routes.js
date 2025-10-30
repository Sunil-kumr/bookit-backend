const express = require('express');
const router = express.Router();
const experiencesController = require('../controllers/experiences.controller');

router.get('/', experiencesController.getAll);
router.get('/:id', experiencesController.getOne);

module.exports = router;
