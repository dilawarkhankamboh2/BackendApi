"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config/config");
// server
;
(async () => {
    // port
    const PORT = config_1.config.PORT;
    const server = app_1.app.listen(PORT, () => console.log(`server runnit at port ${PORT}`));
    process.on("uncaughtException", (err) => {
        console.log(`Uncaught Exception: ${err.message}`);
        console.log("Shutting down the server due to uncaught exception");
        server.close(() => process.exit(1));
    });
})();
