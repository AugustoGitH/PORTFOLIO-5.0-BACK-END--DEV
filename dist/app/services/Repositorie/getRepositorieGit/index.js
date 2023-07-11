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
const axios_1 = __importDefault(require("axios"));
const env_1 = __importDefault(require("../../../constants/env"));
const Repositorie = {
    fetchRepos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: repositories } = yield axios_1.default.get(env_1.default.API_ROUTE_GITHUB, {
                    headers: {
                        Authorization: `token ${process.env.AUTORIZATION_TOKEN_GITHUB}`,
                    },
                });
                return repositories;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    },
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetchRepos();
        });
    },
    findOneById(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const repositories = yield this.fetchRepos();
            return (_a = repositories === null || repositories === void 0 ? void 0 : repositories.find((repo) => repo.id === id)) !== null && _a !== void 0 ? _a : null;
        });
    },
    findTechnologies(languagesUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: technologiesUsed, } = yield axios_1.default.get(languagesUrl);
                return technologiesUsed;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    },
};
exports.default = Repositorie;
