"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const auth_routes_1 = require("./authRoutes/auth.routes");
const allRoutes = (app) => {
    // auth routes
    (0, auth_routes_1.authRoutes)(app);
};
exports.allRoutes = allRoutes;
