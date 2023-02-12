const response = require("../helper/response");

module.exports = validateRequest;

function validateRequest(req, res, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);

    if (error) {
        console.log("error--->>", error.details[0].message.replace(/[|&;$%@"<>()+,]/g, ""));
        return res.status(400).send(response({}, error.details[0].message.replace(/[|&;$%@"<>()+,]/g, ""), false))

    } else {
        req.body = value;
        next();
    }
}