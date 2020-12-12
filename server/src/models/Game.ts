import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import Images from './Image'

@Entity('games')
export default class Games {
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

  @OneToMany(() => Images, image => image.game,{
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'game_id'})
  images: Images[];
}
