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
const fetchRepositoryDetails_1 = __importDefault(require("../../../../services/Projects/fetchRepositoryDetails"));
const forceReturnType_1 = __importDefault(require("../../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const ReloadRepoProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { repoId, idProject } = req.body;
    if (typeof repoId !== 'number' || typeof idProject !== 'string') {
        res.status(400).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_ERROR_NOT_ID_PROJECT_OUR_REPO,
        }));
        return;
    }
    const { repoLink, repositoryTechnologiesPoints } = yield (0, fetchRepositoryDetails_1.default)(repoId);
    if (repoLink === null && repositoryTechnologiesPoints === null) {
        res.status(500).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_ERROR_FETCH_INFOS_REPO,
        }));
        return;
    }
    try {
        yield Project_1.default.findByIdAndUpdate(idProject, Object.assign(Object.assign({}, (repoLink && { repoLink })), (repositoryTechnologiesPoints && {
            repositoryTechnologiesPoints,
        })));
        res.status(200).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_SUCCESS_UPDATE_INFOS_REPO,
        }));
    }
    catch (error) {
        console.log(error);
        res.status(500).send((0, forceReturnType_1.default)({
            message: constants_1.default.GENERIC_ERROR_MESSAGE_UPDATE_INFOS_REPO,
        }));
    }
});
exports.default = ReloadRepoProject;
