import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BiblioTopicRepository } from './biblio_topic.repository';
import { Biblio_Topic } from './biblio_topic.entity';
import { CreateBiblioTopicDto } from './dto/create-biblio-topic.dto';

@Injectable()
export class BiblioTopicsService {
    constructor(
        @InjectRepository(BiblioTopicRepository)
        private BiblioTopicRepository: BiblioTopicRepository,
    ) { }

    async getBiblioTopicsByBiblioId(biblio_id: number): Promise<Biblio_Topic[]> {
        return this.BiblioTopicRepository.getBiblioTopicsByBiblioId(biblio_id);
    }

    async createBulkBiblioTopic(createBulkBiblioTopicDto: CreateBiblioTopicDto[]): Promise<Biblio_Topic[]> {
        return this.BiblioTopicRepository.createBulkBiblioTopic(createBulkBiblioTopicDto);
    }

    async deleteBiblioTopicByBiblioIdAndTopicId(biblio_id: number, Topic_id: number): Promise<void> {
        return this.BiblioTopicRepository.deleteBiblioTopicByBiblioIdAndTopicId(biblio_id, Topic_id);
    }
}