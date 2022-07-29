const AssetRepository = require('../database/repositories/assetRepository');

class AssetService{

    constructor(){
        this.repository = new AssetRepository();
    }

    async getAllAssetsBycreditProfileId(){
        return this.repository.findBycreditProfileId();
    }

    async getAssetById(code){
        return this.repository.findById(code);
    }

    async getAssetByType(type, creditProfileId){
        return this.repository.findByType(type, creditProfileId);
    }

    async getAssetByTotalEstimateValue(totalEstimateValue, creditProfileId){
        return this.repository.findByTotalEstimateValue(totalEstimateValue, creditProfileId);
    }

    async getAssetByMaxTotalEstimateValue(creditProfileId){
        return this.repository.findByMaxTotalEstimateValue(creditProfileId);
    }

    async createAsset(asset, creditProfileId){
        return this.repository.create(asset, creditProfileId);
    }

    async updateAsset(code, asset, creditProfileId){
        return this.repository.update(code, asset, creditProfileId);
    }

    async deleteAsset(code){
        return this.repository.delete(code);
    } 


}

module.exports = AssetService;