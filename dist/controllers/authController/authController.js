"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const tryCatch_middleware_1 = require("../../middlewares/tryCatch.middleware");
// register user
const register = (0, tryCatch_middleware_1.tryCatch)(async (req, res, next) => {
    return res.json({ message: "Register is working" });
});
exports.register = register;
// login user
const login = (0, tryCatch_middleware_1.tryCatch)(async (req, res, next) => {
    return res.json({ message: "Login is working" });
});
exports.login = login;
