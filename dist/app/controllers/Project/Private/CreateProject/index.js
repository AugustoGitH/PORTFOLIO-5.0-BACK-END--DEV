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
const formCreateProject_1 = __importDefault(require("../../../../models/validation/formCreateProject"));
const fetchRepositoryDetails_1 = __importDefault(require("../../../../services/Projects/fetchRepositoryDetails"));
const handleModelBasedAuth_1 = __importDefault(require("../../../../services/Projects/handleModelBasedAuth"));
const forceReturnType_1 = __importDefault(require("../../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectFormCreated = req.body;
    const { error } = (0, formCreateProject_1.default)(projectFormCreated);
    if (error !== undefined) {
        res.status(400).send((0, forceReturnType_1.default)({
            message: error.message,
            project: null,
        }));
        return;
    }
    const { repoId, repoLink } = projectFormCreated;
    const { repoLink: repoLinkSearched, repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched, } = yield (0, fetchRepositoryDetails_1.default)(repoId, repoLink);
    const newProject = Object.assign(Object.assign(Object.assign({}, projectFormCreated), (repoLinkSearched && { repoLink: repoLinkSearched })), (repositoryTechnologiesPointsSearched && {
        repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched,
    }));
    try {
        const projectCreated = yield new Project_1.default(newProject).save();
        res.status(200).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_SUCCESS_CREATE_PROJECT,
            project: (0, handleModelBasedAuth_1.default)(projectCreated).private(),
        }));
    }
    catch (error) {
        res.status(500).send((0, forceReturnType_1.default)({
            message: constants_1.default.GENERIC_ERROR_MESSAGE_CREATE_PROJECT,
            project: null,
        }));
    }
});
exports.default = createProject;
