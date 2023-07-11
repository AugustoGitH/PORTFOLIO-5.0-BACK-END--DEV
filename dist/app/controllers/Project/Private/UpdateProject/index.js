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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("../../../../models/db/Project"));
const formEditProject_1 = __importDefault(require("../../../../models/validation/formEditProject"));
const fetchRepositoryDetails_1 = __importDefault(require("../../../../services/Projects/fetchRepositoryDetails"));
const forceReturnType_1 = __importDefault(require("../../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { idProject } = _a, restValuesEdited = __rest(_a, ["idProject"]);
    const { error } = (0, formEditProject_1.default)(Object.assign({ idProject }, restValuesEdited));
    if (error !== undefined) {
        res.status(400).send((0, forceReturnType_1.default)({
            message: error.message,
        }));
        return;
    }
    const { repoLink: repoLinkSearched, repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched, } = yield (0, fetchRepositoryDetails_1.default)(restValuesEdited.repoId, restValuesEdited.repoLink);
    try {
        yield Promise.all([
            Project_1.default.updateMany({ orderOfFive: restValuesEdited.orderOfFive }, { orderOfFive: 0 }),
            Project_1.default.findByIdAndUpdate(idProject, Object.assign(Object.assign(Object.assign({}, restValuesEdited), (repoLinkSearched && { repoLink: repoLinkSearched })), (repositoryTechnologiesPointsSearched && {
                repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched,
            }))),
        ]);
        res.status(200).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_SUCCESS_EDIT_PROJECT,
        }));
    }
    catch (error) {
        console.log(error);
        res.status(500).send((0, forceReturnType_1.default)({
            message: constants_1.default.GENERIC_ERROR_MESSAGE_EDIT_PROJECT,
        }));
    }
});
exports.default = updateProject;
