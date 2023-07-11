"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCredentialsController = exports.loginController = void 0;
const Login_1 = __importDefault(require("./Login"));
exports.loginController = Login_1.default;
const VerifyCredentials_1 = __importDefault(require("./VerifyCredentials"));
exports.verifyCredentialsController = VerifyCredentials_1.default;
