"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatch = void 0;
const tryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
exports.tryCatch = tryCatch;
