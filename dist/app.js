"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const index_routes_1 = require("./routes/index.routes");
// Middleware setup
app.use((0, morgan_1.default)('common'));
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
// all api routes here
(0, index_routes_1.allRoutes)(app);
