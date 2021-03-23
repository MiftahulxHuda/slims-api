import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Biblio_Author } from 'src/biblio_authors/biblio_author.entity';
import { CustomDate } from 'src/utils/custom-date';

export enum AuthorityType {
    PERSONAL_NAME = "p",
    ORGANIZATIONAL_BODY = "o",
    CONFERENCE = "c"
}

@Entity('mst_author')
export class MST_Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Biblio_Author, biblio_author => biblio_author.author_id)
    author_id: number;

    @Column()
    author_name: string;

    @Column()
    author_year: string;

    @Column({ default: AuthorityType.PERSONAL_NAME })
    authority_type: AuthorityType;

    @Column()
    auth_list: string;

    @Column({ select: false })
    input_date: string;

    @Column({ select: false })
    last_update: string;
}
