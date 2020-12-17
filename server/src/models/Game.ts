import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Image from "./Image";

@Entity("games")
export default class Game {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  about: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToOne((type) => Image, (image) => image.game, {
    cascade: ["insert", "update"],
  })
  image: Image;
}
