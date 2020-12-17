import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Game from "../models/Game";
import Image from "../models/Image";
import GamesView from "../views/games_view";

export default {
  async index(req: Request, res: Response) {
    const repository = getRepository(Game);

    const games = await repository.find({
      relations: ["image"],
    });

    return res.json(GamesView.renderMany(games));
  },

  async create(req: Request, res: Response) {
    try {
      const { name, about } = req.body;

      const reqImage = req.file as Express.Multer.File;

      if (!reqImage || !name || !about) {
        return res.json({
          err: "um dos elementos não preenchidos",
          image: reqImage,
        });
      }

      const image = { path: reqImage.filename };

      const data = {
        name,
        about,
        image,
      };

      const GameRepo = getRepository(Game);

      const game = GameRepo.create(data);

      console.log(game);

      await GameRepo.save(game);

      return res.status(201).json(game);
    } catch (err) {
      console.log(err);
      return res.json(err.message);
    }
  },

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const repository = getRepository(Game);

    const response = await repository.delete(id);

    return res.json(response);
  },
};
