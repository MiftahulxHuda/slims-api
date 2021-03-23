import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

export enum TimeUnit {
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    YEAR = "year"
}

@Entity('mst_frequency')
export class MST_Frequency extends BaseEntity {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Biblio, biblio => biblio.mst_gmd)
    frequency_id: number;

    @Column()
    frequency: string;

    @Column()
    language_prefix: string;

    @Column()
    time_increment: number;

    @Column({
        type: "enum",
        enum: TimeUnit,
        default: TimeUnit.DAY
    })
    time_unit: TimeUnit;

    @Column()
    input_date: string;

    @Column()
    last_update: string;
}
