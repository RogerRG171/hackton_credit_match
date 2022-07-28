const express = require('express');
const router = express.Router();
const assetController = require('../controller/assetController');

router.get('/', assetController.get);
router.get('/:id', assetController.getById);
router.get('/:type', assetController.getByType);
router.get('/:totalEstimateValue', assetController.getByTotalEstimateValue);
router.get('/:maxTotalEstimateValue', assetController.getByMaxTotalEstimateValue);
router.post('/:creditProfileId', assetController.post);
router.put('/:id', assetController.put);
router.delete('/:id', assetController.delete);

module.exports = router;