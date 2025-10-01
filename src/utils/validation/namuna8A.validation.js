const Joi = require("joi");
const { ObjectId } = require("mongodb");

const objectIdValidator = (value, helpers) => {
    if (!ObjectId.isValid(value)) {
        return helpers.error("any.invalid");
    }
    return value;
};

exports.updateNamunaValidationSchema = Joi.object({
    id: Joi.string().custom(objectIdValidator).required().messages({
        "any.required": "Namuna 8A ID is required",
        "string.base": "Namuna 8A ID must be a string",
        "any.invalid": "Invalid Namuna 8A ID",
    }),
});

exports.createMasterDataValidationSchema = Joi.object({
    gramPanchayat: Joi.string().required(),
    panchayatSamiti: Joi.string().required(),
    taluka: Joi.string().required(),
    district: Joi.string().required(),
    rate: Joi.number().required(),
});

exports.updateMasterDataValidationSchema = Joi.object({
    id: Joi.string().required(),
    gramPanchayat: Joi.string().required(),
    panchayatSamiti: Joi.string().required(),
    taluka: Joi.string().required(),
    district: Joi.string().required(),
    rate: Joi.number().required(),
});

exports.createDocumentValidationSchema = Joi.object({
    documentName: Joi.string().trim().required()
});

exports.updateDocumentValidationSchema = Joi.object({
    id: Joi.string().length(24).required(),
    documentName: Joi.string().trim().required(),
});

exports.deleteDocumentValidationSchema = Joi.object({
    ids: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).min(1).required(),
});