import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mst_place')
export class MST_Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  place_id: number;

  @Column()
  place_name: string;

  @Column()
  input_date: string;

  @Column()
  last_update: string;
}
