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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const forceReturnType_1 = __importDefault(require("../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const verifyCredentials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { TOKEN_AUTHENTICATION, TOKEN_SECRET } = process.env;
    if (TOKEN_AUTHENTICATION === undefined || TOKEN_SECRET === undefined) {
        throw new Error('TOKEN_AUTHENTICATION ou TOKEN_SECRET não se encontra nas variaveis de ambiente!');
    }
    const tokenInCookies = req.cookies[TOKEN_AUTHENTICATION];
    const tokenInAuthorization = req.headers.authorization;
    const tokenVerify = tokenInCookies !== null && tokenInCookies !== void 0 ? tokenInCookies : tokenInAuthorization;
    if (tokenVerify === undefined) {
        res.status(200).send((0, forceReturnType_1.default)({
            isAuthenticated: false,
            message: constants_1.default.MESSAGE_TOKEN_NOT_FOUND,
        }));
        return;
    }
    try {
        jsonwebtoken_1.default.verify(tokenVerify, TOKEN_SECRET);
        res.status(200).send((0, forceReturnType_1.default)({
            isAuthenticated: true,
            message: constants_1.default.MESSAGE_PERMISSION_ACCEPTED,
        }));
    }
    catch (error) {
        res.status(200).send((0, forceReturnType_1.default)({
            isAuthenticated: false,
            message: constants_1.default.MESSAGE_NOT_PERMISSION,
        }));
    }
});
exports.default = verifyCredentials;
