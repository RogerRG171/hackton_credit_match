const express = require('express');
const router = express.Router();
const assetController = require('../controller/assetController');

router.get('/', assetController.get);
router.get('/:id', assetController.getById);
router.get('/:type', assetController.getByType);
router.get('/:total_estimate_value', assetController.getByTotalEstimateValue);
router.get('/:credit_profile_id', assetController.getByMaxTotalEstimateValue);
router.post('/:credit_profile_id', assetController.post);
router.put('/:id', assetController.put);
router.delete('/:id', assetController.delete);

module.exports = router;