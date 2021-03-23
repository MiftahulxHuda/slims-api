import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Topic } from './mst_topic.entity';
import { CreateMSTTopicDto } from './dto/create-mst-topic.dto';

@EntityRepository(MST_Topic)
export class MSTTopicRepository extends Repository<MST_Topic> {

    async getMSTTopicsByTopic(topic: string): Promise<MST_Topic[]> {
        try {
            const query = await this.find({
                where: {
                    topic: Like(`%${topic ? topic : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createMSTTopic(createMSTTopicDto: CreateMSTTopicDto): Promise<MST_Topic> {
        const { topic, topic_type, classification, input_date, last_update } = createMSTTopicDto;

        const mst_topic = new MST_Topic();
        mst_topic.topic = topic;
        mst_topic.topic_type = topic_type;
        mst_topic.classification = classification;
        mst_topic.input_date = input_date;
        mst_topic.last_update = last_update;

        try {
            await this.save(mst_topic);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return mst_topic;
    }
}