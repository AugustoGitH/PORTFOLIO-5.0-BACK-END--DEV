"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CredentialCheckAccess_ts_1 = __importDefault(require("../../middleware/CredentialCheckAccess.ts"));
const constants_1 = __importDefault(require("./constants"));
const Private_1 = __importDefault(require("./Private"));
const Public_1 = __importDefault(require("./Public"));
const router = (0, express_1.Router)();
router.use(constants_1.default.ROUTES_API_PRIVATE, CredentialCheckAccess_ts_1.default, Private_1.default);
router.use(constants_1.default.ROUTES_API_PUBLIC, Public_1.default);
const projectRouters = router;
exports.default = projectRouters;
