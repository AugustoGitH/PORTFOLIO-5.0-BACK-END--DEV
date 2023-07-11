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
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const getRepositorieGit_1 = __importDefault(require("../../Repositorie/getRepositorieGit"));
const fetchRepositoryDetails = (repoId, repoLink) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const repositorySearchedById = typeof repoId === 'number' ? yield getRepositorieGit_1.default.findOneById(repoId) : null;
    const repositoryTechnologiesPoints = repositorySearchedById != null
        ? yield getRepositorieGit_1.default.findTechnologies(repositorySearchedById.languages_url)
        : null;
    return {
        repoLink: !repoLink ? (_a = repositorySearchedById === null || repositorySearchedById === void 0 ? void 0 : repositorySearchedById.svn_url) !== null && _a !== void 0 ? _a : null : repoLink,
        repositoryTechnologiesPoints: !repoLink
            ? repositoryTechnologiesPoints
            : null,
    };
});
exports.default = fetchRepositoryDetails;
