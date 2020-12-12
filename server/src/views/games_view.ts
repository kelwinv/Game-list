import Games from "../models/Game";
import ImagesViews from "./images_views";

export default {
  render(game: Games) {
    return {
      id: game.id,
      name: game.name,
      about: game.about,
      created_at: game.created_at,
      updated_at: game.updated_at,
      images: ImagesViews.render(game.images[0]),
    };
  },
  renderMany(game: Games[]) {
    return game.map(Games => this.render(Games))
  }
};
