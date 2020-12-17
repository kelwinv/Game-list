import { Router } from "express";
import multer from "multer";

import multerConfig from "./config/multer";

import GamesController from "./controller/GamesController";

const routes = Router();

const upload = multer(multerConfig);

routes.get("/games", GamesController.index);

routes.post("/games", upload.single("image"), GamesController.create);

routes.delete("/games/:id", GamesController.destroy);

export default routes;
