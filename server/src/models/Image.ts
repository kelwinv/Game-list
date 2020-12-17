import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Game from "./Game";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  path: string;

  @OneToOne((type) => Game, (game) => game.image)
  @JoinColumn({ name: "game_id" })
  game: Game;
}
