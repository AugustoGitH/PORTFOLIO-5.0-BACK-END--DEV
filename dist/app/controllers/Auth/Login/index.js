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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../../../constants/env"));
const formLogin_1 = __importDefault(require("../../../models/validation/formLogin"));
const forceReturnType_1 = __importDefault(require("../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { name, password } = req.body;
    const { error } = (0, formLogin_1.default)({ name, password });
    const { NAME_ADMIN, PASSWORD_ADMIN, TOKEN_AUTHENTICATION, TOKEN_SECRET } = process.env;
    if (error !== undefined) {
        res.status(400).send((0, forceReturnType_1.default)({
            message: error.message,
        }));
        return;
    }
    if (name !== NAME_ADMIN) {
        res.status(401).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_NAME_OUR_PASSWORD_INCORRECT,
        }));
        return;
    }
    const passAndUserMatch = bcryptjs_1.default.compareSync(password, PASSWORD_ADMIN !== null && PASSWORD_ADMIN !== void 0 ? PASSWORD_ADMIN : '');
    if (!passAndUserMatch) {
        res.status(401).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_NAME_OUR_PASSWORD_INCORRECT,
        }));
        return;
    }
    try {
        if (TOKEN_SECRET === undefined || TOKEN_AUTHENTICATION === undefined) {
            throw new Error('A variavel de ambiente TOKEN_SECRET ou TOKEN_AUTHENTICATION é indefinido!');
        }
        const token = jsonwebtoken_1.default.sign({
            adminName: name,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
        }, TOKEN_SECRET);
        res.cookie(TOKEN_AUTHENTICATION, token, {
            sameSite: 'none',
            domain: (_a = env_1.default.HOST_NAME_FRONT().domain) !== null && _a !== void 0 ? _a : undefined,
            path: '/',
            secure: true,
            httpOnly: true,
        });
        res.status(200).send((0, forceReturnType_1.default)({
            message: constants_1.default.MESSAGE_SUCCESS_LOGIN,
        }));
    }
    catch (error) {
        console.log(error);
        res.status(500).send((0, forceReturnType_1.default)({
            message: constants_1.default.GENERIC_ERROR_MESSAGE_LOGIN,
        }));
    }
});
exports.default = login;
