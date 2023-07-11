"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const schemaFormLogin = (data) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().min(10).max(30).required(),
        password: joi_1.default.string()
            .min(10)
            .max(30)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/)
            .required(),
    });
    return schema.validate(data);
};
exports.default = schemaFormLogin;
