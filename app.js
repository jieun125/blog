import express from "express";
import morgan from "morgan";
import helmet from "helmet"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import routes from "./routes";
import globalRouter from "./routers/globalRouter"

const app = express();

app.set('view engine', "pug");
app.use(cookieParser);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);

export default app;



