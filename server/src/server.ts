import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import "./database";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/tmp/uploads",
  express.static(path.join(__dirname, "..", "tmp", "uploads"))
);
app.use(morgan("dev"));
app.use(routes);

app.listen(3333);
