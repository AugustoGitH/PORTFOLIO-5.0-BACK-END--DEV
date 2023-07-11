"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const handleBaseURL = (base, routes) => {
    const refactoryRoutes = Object.fromEntries(Object.entries(routes).map(([name, route]) => [
        name,
        `${base}${String(route)[0] !== '/' ? '/' : route} `,
    ]));
    return refactoryRoutes;
};
exports.default = handleBaseURL;
