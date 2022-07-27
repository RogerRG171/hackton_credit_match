const CreditProfileRepository = require('../database/repositories/creditProfileRepository');

class CreditProfileService{

    constructor(){
        this.repository = new CreditProfileRepository();
    }

    async getAllCreditProfiles(){
        return this.repository.findAll();
    }

    async getCreditProfileById(code){
        return this.repository.findById(code);
    }

    async getCreditProfileByDesiredAmount(desiredAmount){
        return this.repository.findByDesiredAmount(desiredAmount);
    }

    async createCreditProfile(creditProfile){
        return this.repository.create(creditProfile);
    }

    async updateCreditProfile(code, creditProfile){
        return this.repository.update(code, creditProfile);
    }

    async deleteCreditProfile(code){
        return this.repository.delete(code);
    } 


}

module.exports = CreditProfileService;