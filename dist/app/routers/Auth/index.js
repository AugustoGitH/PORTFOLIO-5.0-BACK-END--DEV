"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = require("../../controllers/Auth");
const constants_1 = __importDefault(require("./constants"));
const router = (0, express_1.Router)();
router.post(constants_1.default.ROUTE_API_AUTH_LOGIN, Auth_1.loginController);
router.get(constants_1.default.ROUTE_API_AUTH_VERIFY_CREDENTIAL, Auth_1.verifyCredentialsController);
const authRouters = router;
exports.default = authRouters;
