import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

@Entity('mst_publisher')
export class MST_Publisher extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Biblio, biblio => biblio.mst_publisher)
  publisher_id: number;

  @Column()
  publisher_name: string;

  @Column()
  input_date: string;

  @Column()
  last_update: string;
}
