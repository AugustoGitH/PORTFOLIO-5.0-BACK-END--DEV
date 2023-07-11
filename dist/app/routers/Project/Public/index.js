"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Public_1 = require("../../../controllers/Project/Public");
const constants_1 = __importDefault(require("./constants"));
const router = (0, express_1.Router)();
router.put(constants_1.default.ROUTE_API_PUBLIC_VIEW_PROJECT, Public_1.viewProjectController);
router.put(constants_1.default.ROUTE_API_PUBLIC_LIKE_PROJECT, Public_1.likeProjectController);
router.get(constants_1.default.ROUTE_API_PUBLIC_GET_PROJECTS, Public_1.getProjectsController);
exports.default = router;
