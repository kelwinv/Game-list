import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Game from "../models/Game";
import GamesView from "../views/games_view";

export default {
  async index(req: Request, res: Response) {
    const repository = getRepository(Game);

    const games = await repository.find({
      relations: ["images"],
    });

    return res.json(GamesView.renderMany(games));
  },

  async create(req: Request, res: Response) {
    try {
      const { name, about } = req.body;

      const reqImages = req.files as Express.Multer.File[];

      const images = reqImages.map((image) => {
        return { path: image.filename };
      });

      const data = {
        name,
        about,
        images,
      };

      const repository = getRepository(Game);

      const game = repository.create(data);

      await repository.save(game);

      return res.status(201).json(game);
    } catch (err) {
      return res.json(err.message);
    }
  },
};
