const express = require('express');
const router = express.Router();
const creditProfileController = require('../controller/creditProfileController');

router.get('/', creditProfileController.get);
router.get('/:id', creditProfileController.getById);
router.get('/:desired_amount', creditProfileController.getByDesiredAmount);
router.post('/', creditProfileController.post);
router.put('/:id', creditProfileController.put);
router.delete('/:id', creditProfileController.delete);

module.exports = router;