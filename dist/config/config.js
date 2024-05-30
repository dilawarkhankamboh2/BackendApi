"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const _config = {
    PORT: process.env.PORT || 5050
};
exports.config = Object.freeze(_config);
