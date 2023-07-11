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
const Project_1 = __importDefault(require("../../../../models/db/Project"));
const forceReturnType_1 = __importDefault(require("../../../../utils/forceReturnType"));
const constants_1 = __importDefault(require("./constants"));
const viewProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idProject } = req.body;
    const { CUSTOMER_ID } = process.env;
    console.log('teste');
    if (CUSTOMER_ID === undefined) {
        throw new Error('A variavel de ambiente TOKEN_CUSTOMER_ID é indefinida!');
    }
    const customerId = req.cookies[CUSTOMER_ID];
    try {
        const project = yield Project_1.default.findById(idProject);
        if (project == null) {
            res.status(404).send((0, forceReturnType_1.default)({
                message: constants_1.default.MESSAGE_PROJECT_NOT_FOUND,
            }));
            return;
        }
        yield Project_1.default.findByIdAndUpdate(idProject, Object.assign({}, (typeof customerId === 'string'
            ? {
                $push: {
                    views: (0, forceReturnType_1.default)({
                        idCustomer: customerId,
                        previewDate: new Date(),
                    }),
                },
            }
            : {})));
        res.status(200).send((0, forceReturnType_1.default)({
            message: constants_1.default.SUCCESS_MESSAGE_PROJECT_VIEW,
        }));
    }
    catch (error) {
        console.log(error);
        res.status(500).send((0, forceReturnType_1.default)({
            message: constants_1.default.GENERIC_ERROR_MESSAGE_PROJECT_VIEW,
        }));
    }
});
exports.default = viewProject;
