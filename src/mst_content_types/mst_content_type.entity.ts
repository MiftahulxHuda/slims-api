import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

@Entity('mst_content_type')
export class MST_Content_Type extends BaseEntity {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Biblio, biblio => biblio.mst_content_type)
    id: number;

    @Column()
    content_type: string;

    @Column()
    code: string;

    @Column()
    code2: string;

    @Column()
    input_date: string;

    @Column()
    last_update: string;
}