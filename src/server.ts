import { app } from "./app";
import { config } from "./config/config";

// server
;(async () => {
  // port
  const PORT = config.PORT;

  const server = app.listen(PORT, () =>
    console.log(`server runnit at port ${PORT}`)
  );

  process.on("uncaughtException", (err) => {
    console.log(`Uncaught Exception: ${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    server.close(() => process.exit(1));
  });
})();
