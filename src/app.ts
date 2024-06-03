import express from "express";
const app = express();
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";


// Middleware setup
app.use(morgan('common'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.static('public'));

export { app };
