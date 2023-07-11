"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewProjectController = exports.likeProjectController = exports.getProjectsController = void 0;
const GetProjects_1 = __importDefault(require("./GetProjects"));
exports.getProjectsController = GetProjects_1.default;
const LikeProject_1 = __importDefault(require("./LikeProject"));
exports.likeProjectController = LikeProject_1.default;
const ViewProject_1 = __importDefault(require("./ViewProject"));
exports.viewProjectController = ViewProject_1.default;
