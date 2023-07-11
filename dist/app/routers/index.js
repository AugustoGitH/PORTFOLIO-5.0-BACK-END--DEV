"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VerifyAndCreateTokenCustomerUser_1 = __importDefault(require("../middleware/VerifyAndCreateTokenCustomerUser"));
const Auth_1 = __importDefault(require("./Auth"));
const constants_1 = __importDefault(require("./constants"));
const Project_1 = __importDefault(require("./Project"));
const router = (0, express_1.Router)();
router.use(VerifyAndCreateTokenCustomerUser_1.default);
router.use(constants_1.default.BASE_ROUTE_API_AUTH, Auth_1.default);
router.use(constants_1.default.BASE_ROUTE_API_PROJECT, Project_1.default);
const routers = router;
exports.default = routers;
