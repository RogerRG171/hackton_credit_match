const LenderRepository = require('../database/repositories/lenderRepository');

class LenderService{

    constructor(){
        this.repository = new LenderRepository();
    }

    async getAllLenders(){
        return this.repository.findAll();
    }

    async getLenderById(code){
        return this.repository.findById(code);
    }

    async getLenderByEmail(email){
        return this.repository.findByEmail(email);
    }

    async createLender(lender){
        return this.repository.create(lender);
    }

    async updateLender(code, lender){
        return this.repository.update(code, lender);
    }

    async deleteLender(code){
        return this.repository.delete(code);
    } 


}

module.exports = LenderService;