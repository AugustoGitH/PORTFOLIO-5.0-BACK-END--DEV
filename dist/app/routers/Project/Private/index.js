"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Private_1 = require("../../../controllers/Project/Private");
const constants_1 = __importDefault(require("./constants"));
const router = (0, express_1.Router)();
router.post(constants_1.default.ROUTE_API_PRIVATE_CREATE_PROJECT, Private_1.createProjectController);
router.delete(constants_1.default.ROUTE_API_PRIVATE_DELETE_PROJECT, Private_1.deleteProjectController);
router.get(constants_1.default.ROUTE_API_PRIVATE_GET_PROJECTS, Private_1.getProjectsController);
router.get(constants_1.default.ROUTE_API_PRIVATE_GET_REPOSITORIES, Private_1.getRepositoriesController);
router.put(constants_1.default.ROUTE_API_PRIVATE_RELOAD_REPO_PROJECT, Private_1.ReloadRepoProjectController);
router.put(constants_1.default.ROUTE_API_PRIVATE_UPDATE_PROJECT, Private_1.updateProjectController);
exports.default = router;
