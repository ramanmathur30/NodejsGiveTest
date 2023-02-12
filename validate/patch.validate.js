const Joi = require('joi');
const  validateRequest = require('../middleware/validate.middleware');

//authenticateSchema
function upsertValidate(req, res, next) {
    const schema = Joi.object({
        path: Joi.string().required(),
        value: [Joi.string().required(), Joi.object().required()]
    });
    validateRequest(req,res,next, schema);
}
module.exports = upsertValidate;

