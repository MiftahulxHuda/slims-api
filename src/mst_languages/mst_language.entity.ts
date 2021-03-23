import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

@Entity('mst_language')
export class MST_Language extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Biblio, biblio => biblio.mst_language)
  language_id: number;

  @Column()
  language_name: string;

  @Column({ select: false })
  input_date: string;

  @Column({ select: false })
  last_update: string;
}
