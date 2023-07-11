"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    orderOfFive: { type: Number, default: 0 },
    name: { type: String, required: true },
    images: { type: Object, required: true },
    type: { type: String, required: true },
    technologiesUsed: {
        type: [
            {
                type: String,
            },
        ],
        required: true,
    },
    websiteLink: { type: String, default: '' },
    videoLink: { type: String, default: '' },
    repoId: { type: Number, default: null },
    views: { type: [{ type: { previewDate: Date, idCustomer: String } }] },
    likes: { type: [{ type: { previewDate: Date, idCustomer: String } }] },
    repositoryTechnologiesPoints: { type: Object, default: {} },
    repoLink: { type: String, default: '' },
    favorite: { type: Boolean, default: false },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Project', projectSchema);
