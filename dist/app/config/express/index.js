"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const env_1 = __importDefault(require("../../constants/env"));
const routers_1 = __importDefault(require("../../routers"));
const constants_1 = __importDefault(require("./constants"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: (_a = env_1.default.HOST_NAME_FRONT().url) !== null && _a !== void 0 ? _a : undefined,
    credentials: true,
}));
app.use(body_parser_1.default.json({ limit: '9999999999mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '9999999999mb', extended: true }));
app.use(constants_1.default.BASE_ROUTES_API, routers_1.default);
app.listen(env_1.default.PORT, () => {
    console.log(`Server ${env_1.default.MODE} running on port ${env_1.default.PORT}.`);
});
