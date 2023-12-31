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
const getRepositorieGit_1 = __importDefault(require("../../../../services/Repositorie/getRepositorieGit"));
const forceReturnType_1 = __importDefault(require("../../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const getRepositories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repositories = yield getRepositorieGit_1.default.findAll();
    res.status(200).send((0, forceReturnType_1.default)({
        repositories,
        message: constants_1.default.SUCCESS_MESSAGE_GET_REPOSITORIES,
    }));
});
exports.default = getRepositories;
