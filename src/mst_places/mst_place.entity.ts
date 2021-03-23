import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

@Entity('mst_place')
export class MST_Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Biblio, biblio => biblio.mst_place)
  place_id: number;

  @Column()
  place_name: string;

  @Column()
  input_date: string;

  @Column()
  last_update: string;
}
