const express = require('express');
const router = express.Router();
const productOfferController = require('../controller/productOfferController');

router.get('/', productOfferController.get);
router.get('/:id', productOfferController.getById);

router.get('/:expiration_date', productOfferController.getByExpirationDate);
router.get('/:max_effective_interest_rate', productOfferController.getByMaxRate);
router.get('/:assets_accepted_as_collateral', productOfferController.getByAssetsAccepted);
router.get('/:payment_plan_options', productOfferController.getByPaymentPlan);
router.get('/:term_options', productOfferController.getByTermOptions);
router.get('/:min_risk_score', productOfferController.getByMinRiskScore);
router.get('/:lender_id', productOfferController.getByLenderId);

router.post('/', productOfferController.post);
router.put('/:id', productOfferController.put);
router.delete('/:id', productOfferController.delete);

module.exports = router;