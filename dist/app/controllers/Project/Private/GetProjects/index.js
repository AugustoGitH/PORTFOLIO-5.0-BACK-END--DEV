"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("../../../../models/db/Project"));
const handleModelBasedAuth_1 = __importDefault(require("../../../../services/Projects/handleModelBasedAuth"));
const forceReturnType_1 = __importDefault(require("../../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.find({});
        res.status(200).send((0, forceReturnType_1.default)({
            message: constants_1.default.SUCCESS_MESSAGE_SEARCHED_PROJECTS,
            projects: projects.map((project) => (0, handleModelBasedAuth_1.default)(project).private()),
        }));
    }
    catch (error) {
        console.log(error);
        res.status(500).send((0, forceReturnType_1.default)({
            message: constants_1.default.GENERIC_ERROR_MESSAGE_SEARCHED_PROJECTS,
            projects: null,
        }));
    }
});
exports.default = getProjects;
