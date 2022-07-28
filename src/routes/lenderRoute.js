const express = require('express');
const router = express.Router();
const lenderController = require('../controller/lenderController');

router.get('/', lenderController.get);
router.get('/:id', lenderController.getById);
router.get('/:email', lenderController.getByEmail);
router.get('/:trading_name', lenderController.getByTradingName);
router.post('/', lenderController.post);
router.put('/:id', lenderController.put);
router.delete('/:id', lenderController.delete);

module.exports = router;