"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const settings_1 = require("../settings");
const schemaFormEditProject = (data) => {
    const schema = joi_1.default.object({
        idProject: joi_1.default.string().required(),
        orderOfFive: joi_1.default.number().optional().allow(0),
        name: joi_1.default.string().min(4).max(47).required(),
        type: joi_1.default.string()
            .required()
            .custom((type, helper) => {
            if (!settings_1.whiteListTypesProject.includes(type)) {
                return helper.error('O tipo selecionado é inválido!');
            }
            return type;
        }),
        technologiesUsed: joi_1.default.array()
            .items(joi_1.default.string())
            .min(2)
            .required()
            .custom((techsSelected, helper) => {
            if (!techsSelected.every((tech) => settings_1.whiteListTechsUsedProject.includes(tech))) {
                return helper.error('Alguma tecnologia selecionada é inválida!');
            }
            return techsSelected;
        }),
        websiteLink: joi_1.default.string().optional().allow(''),
        videoLink: joi_1.default.string().optional().allow(''),
        repoId: joi_1.default.number().optional().allow(null),
        repoLink: joi_1.default.string().optional().allow(''),
    });
    return schema.validate(data);
};
exports.default = schemaFormEditProject;
