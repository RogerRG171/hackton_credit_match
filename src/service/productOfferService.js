const ProductOfferRepository = require('../database/repositories/productOfferRepository');

class ProductOfferService{

    constructor(){
        this.repository = new ProductOfferRepository();
    }

    async getAllProductOffers(){
        return this.repository.findAll();
    }

    async getProductOfferById(code){
        return this.repository.findById(code);
    }

    async getProductOfferByExpirationDate(expirationDate){
        return this.repository.findByExpirationDate(expirationDate);
    }

    async getProductOfferByMaxRate(maxRate){
        return this.repository.findByMaxRate(maxRate);
    }

    async getProductOfferByAssetsAccepted(assetsAccepted){
        return this.repository.findByAssetsAccepted(assetsAccepted);
    }

    async getProductOfferByPaymentPlan(paymentPlan){
        return this.repository.findByPaymentPlan(paymentPlan);
    }

    async getProductOfferByTermOptions(termOptions){
        return this.repository.findByTermOptions(termOptions);
    }

    async getProductOfferByMinRiskScore(minRiskScore){
        return this.repository.findByMinRiskScore(minRiskScore);
    }

    async getProductOfferByLenderId(lenderId){
        return this.repository.findByLenderId(lenderId);
    }

    async createProductOffer(productOffer){
        return this.repository.create(productOffer);
    }

    async updateProductOffer(code, productOffer){
        return this.repository.update(code, productOffer);
    }

    async deleteProductOffer(code){
        return this.repository.delete(code);
    } 


}

module.exports = ProductOfferService;