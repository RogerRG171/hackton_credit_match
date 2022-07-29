const AssetService = require('../service/assetService');

exports.get = async (req, res, next) => {
    const payload = await new AssetService().getAllAssetsBycreditProfileId(req.params.credit_profile_id);
    res.status(200).send(payload);
};

exports.getById = async (req, res, next) => {
    const payload = await new AssetService().getAssetById(req.params.id);
    res.status(200).send(payload);
};

exports.getByType = async (req, res, next) => {
    const payload = await new AssetService().getAssetByType(req.params.type);
    res.status(200).send(payload);
};

exports.getByTotalEstimateValue = async (req, res, next) => {
    const payload = await new AssetService().getAssetByTotalEstimateValue(req.params.total_estimate_value, req.params.credit_profile_id);
    res.status(200).send(payload);
};

exports.getByMaxTotalEstimateValue = async (req, res, next) => {
    const payload = await new AssetService().getAssetByTotalEstimateValue(req.params.credit_profile_id);
    res.status(200).send(payload);
};

exports.post = async (req, res, next) => {
    try{
        const payload = await new AssetService().createAsset(req.body, req.params.credit_profile_id);
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
        
        
        const oldAsset = await new AssetService().getAssetById(req.params.id);

        if(!oldAsset || oldAsset.length === 0){
            throw new Error(`Asset with ID ${id} was not found.`);
        }
        const payload = await new AssetService().updateAsset(id, body);

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
        
        
        const oldAsset = await new AssetService().getAssetById(req.params.id);

        if(!oldAsset || oldAsset.length === 0){
            throw new Error(`Asset with ID ${id} was not found.`);
        }

        const payload = await new AssetService().deleteAsset(id);

        res.status(204).send(payload);
    }catch(error){
        res.status(404).send({
            message: error.message
        });
    }
};