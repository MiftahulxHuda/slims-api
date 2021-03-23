import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

@Entity('mst_gmd')
export class MST_GMD extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Biblio, biblio => biblio.mst_gmd)
  gmd_id: number;

  @Column()
  gmd_code: string;

  @Column()
  gmd_name: string;

  @Column()
  icon_image: string;

  @Column()
  input_date: string;

  @Column()
  last_update: string;
}
