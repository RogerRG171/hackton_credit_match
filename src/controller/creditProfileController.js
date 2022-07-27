const CreditProfileService = require('../service/creditProfileService');

exports.get = async (req, res, next) => {
    const payload = await new CreditProfileService().getAllCreditProfiles();
    res.status(200).send(payload);
};

exports.getById = async (req, res, next) => {
    const payload = await new CreditProfileService().getCreditProfileById(req.params.id);
    res.status(200).send(payload);
};

exports.getByDesiredAmount = async (req, res, next) => {
    const payload = await new CreditProfileService().getCreditProfileByDesiredAmount(req.params.desiredAmount);
    res.status(200).send(payload);
};

exports.post = async (req, res, next) => {
    try{
        const payload = await new CreditProfileService().createCreditProfile(req.body);
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
        
        
        const oldCreditProfile = await new CreditProfileService().getCreditProfileById(req.params.id);

        if(!oldCreditProfile || oldCreditProfile.length === 0){
            throw new Error(`Credit Profile with ID ${id} was not found.`);
        }
        const payload = await new CreditProfileService().updateCreditProfile(id, body);

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
        
        
        const oldCreditProfile = await new CreditProfileService().getCreditProfileById(req.params.id);

        if(!oldCreditProfile || oldCreditProfile.length === 0){
            throw new Error(`Credit Profile with ID ${id} was not found.`);
        }

        const payload = await new CreditProfileService().deleteCreditProfile(id);

        res.status(204).send(payload);
    }catch(error){
        res.status(404).send({
            message: error.message
        });
    }
};