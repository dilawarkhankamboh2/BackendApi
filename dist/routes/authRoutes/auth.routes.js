"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const authController_1 = require("../../controllers/authController/authController");
const authRoutes = (app) => {
    // register api routes
    app.post("/api/v1/register/user", authController_1.register);
    // login api routes
    app.post("/api/v1/login/user", authController_1.login);
};
exports.authRoutes = authRoutes;
