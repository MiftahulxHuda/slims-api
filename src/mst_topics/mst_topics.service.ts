import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTTopicRepository } from './mst_topic.repository';
import { MST_Topic } from './mst_topic.entity';
import { CreateMSTTopicDto } from './dto/create-mst-topic.dto';

@Injectable()
export class MSTTopicsService {
    constructor(
        @InjectRepository(MSTTopicRepository)
        private MSTTopicRepository: MSTTopicRepository,
    ) { }

    async getMSTTopicsByTopic(topic: string): Promise<MST_Topic[]> {
        return this.MSTTopicRepository.getMSTTopicsByTopic(topic);
    }

    async createMSTTopic(createMSTAuthorDto: CreateMSTTopicDto): Promise<MST_Topic> {
        return this.MSTTopicRepository.createMSTTopic(createMSTAuthorDto);
    }
}