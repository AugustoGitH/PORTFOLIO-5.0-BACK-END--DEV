"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = __importDefault(require("../constants/env"));
const { MODE, URL } = env_1.default.MONGO_CONNECTION_URL();
console.log(MODE);
mongoose_1.default
    .connect(URL !== null && URL !== void 0 ? URL : '')
    .then(() => {
    console.log(`Database under ${MODE} running.`);
})
    .catch((error) => {
    console.log(error);
});
