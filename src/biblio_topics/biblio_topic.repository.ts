import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Biblio_Topic } from './biblio_topic.entity';
import { CreateBiblioTopicDto } from './dto/create-biblio-topic.dto';

@EntityRepository(Biblio_Topic)
export class BiblioTopicRepository extends Repository<Biblio_Topic> {

    async getBiblioTopicsByBiblioId(biblio_id: number): Promise<Biblio_Topic[]> {
        try {
            const query = await this.find({ where: { biblio_id: biblio_id } });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createBulkBiblioTopic(createBulkBiblioTopicDto: CreateBiblioTopicDto[]): Promise<Biblio_Topic[]> {
        let bulkBiblioTopic: Biblio_Topic[] = createBulkBiblioTopicDto.map(item => {
            const biblioTopic = new Biblio_Topic();
            biblioTopic.biblio_id = item.biblio_id;
            biblioTopic.topic_id = item.topic_id;
            biblioTopic.level = item.level;
            return biblioTopic;
        });

        try {
            await this.save(bulkBiblioTopic);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return bulkBiblioTopic;
    }

    async deleteBiblioTopicByBiblioIdAndTopicId(biblio_id, topic_id): Promise<void> {
        try {
            await this.delete({ biblio_id: biblio_id, topic_id: topic_id });
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}