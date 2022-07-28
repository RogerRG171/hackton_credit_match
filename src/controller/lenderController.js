const LenderService = require('../service/lenderService');

exports.get = async (req, res, next) => {
    const payload = await new LenderService().getAllLenders();
    res.status(200).send(payload);
};

exports.getById = async (req, res, next) => {
    const payload = await new LenderService().getLenderById(req.params.id);
    res.status(200).send(payload);
};

exports.getByEmail = async (req, res, next) => {
    const payload = await new LenderService().getLenderByEmail(req.params.email);
    res.status(200).send(payload);
};

exports.getByTradingName = async (req, res, next) => {
    const payload = await new LenderService().getLenderByTradingName(req.params.trading_name);
    res.status(200).send(payload);
};

exports.post = async (req, res, next) => {
    try{
        const payload = await new LenderService().createLender(req.body);
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
        
        
        const oldLender = await new LenderService().getLenderById(req.params.id);

        if(!oldLender || oldLender.length === 0){
            throw new Error(`Lender with ID ${id} was not found.`);
        }
        const payload = await new LenderService().updateLender(id, body);

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
        
        
        const oldLender = await new LenderService().getLenderById(req.params.id);

        if(!oldLender || oldLender.length === 0){
            throw new Error(`Lender with ID ${id} was not found.`);
        }

        const payload = await new LenderService().deleteLender(id);

        res.status(204).send(payload);
    }catch(error){
        res.status(404).send({
            message: error.message
        });
    }
};