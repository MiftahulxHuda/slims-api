import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

@Entity('mst_carrier_type')
export class MST_Carrier_Type extends BaseEntity {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Biblio, biblio => biblio.mst_carrier_type)
    id: number;

    @Column()
    carrier_type: string;

    @Column()
    code: string;

    @Column()
    code2: string;

    @Column()
    input_date: string;

    @Column()
    last_update: string;
}
