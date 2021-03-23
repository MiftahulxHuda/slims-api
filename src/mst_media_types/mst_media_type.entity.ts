import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio } from 'src/biblios/biblio.entity';

@Entity('mst_media_type')
export class MST_Media_Type extends BaseEntity {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Biblio, biblio => biblio.mst_media_type)
    id: number;

    @Column()
    media_type: string;

    @Column()
    code: string;

    @Column()
    code2: string;

    @Column({ select: false })
    input_date: string;

    @Column({ select: false })
    last_update: string;
}
