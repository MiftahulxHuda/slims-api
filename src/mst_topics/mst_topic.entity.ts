import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Biblio_Topic } from 'src/biblio_topics/biblio_topic.entity';

export enum TopicType {
    TOPIC = "t",
    GEOGRAPHIC = "g",
    NAME = "n",
    TEMPORAL = "tm",
    GENRE = "gr",
    OCCUPATION = "oc"
}

@Entity('mst_topic')
export class MST_Topic extends BaseEntity {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Biblio_Topic, biblio_topic => biblio_topic.topic_id)
    topic_id: number;

    @Column()
    topic: string;

    @Column({ default: TopicType.TOPIC })
    topic_type: TopicType;

    @Column()
    auth_list: string;

    @Column()
    classification: string;

    @Column({ select: false })
    input_date: string;

    @Column({ select: false })
    last_update: string;
}
