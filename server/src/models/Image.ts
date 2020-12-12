import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Game from "./Game";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Game, (game) => game.images)
  @JoinColumn({ name: "game_id" })
  game: Game;
}
