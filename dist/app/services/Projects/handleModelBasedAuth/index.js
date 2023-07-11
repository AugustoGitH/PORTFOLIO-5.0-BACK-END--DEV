"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleModelBasedAuth = (project) => {
    return {
        private: () => project,
        public: () => {
            const { _id, createdAt, favorite, images, likes, name, orderOfFive, repoId, repoLink, websiteLink, repositoryTechnologiesPoints, technologiesUsed, type, videoLink, views, } = project;
            return {
                _id,
                createdAt,
                favorite,
                images,
                likes,
                name,
                orderOfFive,
                repoId,
                repoLink,
                repositoryTechnologiesPoints,
                technologiesUsed,
                type,
                videoLink,
                views,
                websiteLink,
            };
        },
    };
};
exports.default = handleModelBasedAuth;
