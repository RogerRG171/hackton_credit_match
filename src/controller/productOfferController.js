const ProductOfferService = require('../service/productOfferService');

exports.get = async (req, res, next) => {
    const payload = await new ProductOfferService().getAllProductOffers();
    res.status(200).send(payload);
};

exports.getById = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferById(req.params.id);
    res.status(200).send(payload);
};

exports.getByExpirationDate = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferByExpirationDate(req.params.expiration_date);
    res.status(200).send(payload);
};

exports.getByMaxRate = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferByMaxRate(req.params.max_effective_interest_rate);
    res.status(200).send(payload);
};

exports.getByAssetsAccepted = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferByExpirationDate(req.params.assets_accepted_as_collateral);
    res.status(200).send(payload);
};

exports.getByPaymentPlan = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferByExpirationDate(req.params.payment_plan_options);
    res.status(200).send(payload);
};

exports.getByTermOptions = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferByExpirationDate(req.params.term_options);
    res.status(200).send(payload);
};

exports.getByMinRiskScore = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferByExpirationDate(req.params.min_risk_score);
    res.status(200).send(payload);
};

exports.getByLenderId = async (req, res, next) => {
    const payload = await new ProductOfferService().getProductOfferByLenderId(req.params.lender_id);
    res.status(200).send(payload);
};

exports.post = async (req, res, next) => {
    try{
        const payload = await new ProductOfferService().createProductOffer(req.body);
        res.status(201).send(payload);
    }catch(error){
        res.status(400).send({
            message: error.message
        });
    }
};

exports.put = async (req, res, next) => {
    try{
        const id = req.params.id;
        const body = req.body;
        
        
        const oldProductOffer = await new ProductOfferService().getProductOfferById(req.params.id);

        if(!oldProductOffer || oldProductOffer.length === 0){
            throw new Error(`Product Offer with ID ${id} was not found.`);
        }
        const payload = await new ProductOfferService().updateProductOffer(id, body);

        res.status(201).send(payload);
    }catch(error){
        res.status(400).send({
            message: error.message
        });
    }
};

exports.delete = async (req, res, next) => {
    try{
        const id = req.params.id;
        
        
        const oldProductOffer = await new ProductOfferService().getProductOfferById(req.params.id);

        if(!oldProductOffer || oldProductOffer.length === 0){
            throw new Error(`ProductOffer with ID ${id} was not found.`);
        }

        const payload = await new ProductOfferService().deleteProductOffer(id);

        res.status(204).send(payload);
    }catch(error){
        res.status(404).send({
            message: error.message
        });
    }
};