import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTPublisherRepository } from './mst_publisher.repository';
import { MST_Publisher } from './mst-publisher.entity';
import { CreateMSTPublisherDto } from './dto/create-mst-publisher.dto';

@Injectable()
export class MSTPublishersService {
    constructor(
        @InjectRepository(MSTPublisherRepository)
        private MSTPublisherRepository: MSTPublisherRepository,
    ) { }

    async getMSTPublishersByName(author_name: string): Promise<MST_Publisher[]> {
        return this.MSTPublisherRepository.getMSTPublishersByName(author_name);
    }

    async createMSTPublisher(createMSTPublisherDto: CreateMSTPublisherDto): Promise<MST_Publisher> {
        return this.MSTPublisherRepository.createMSTPublisher(createMSTPublisherDto);
    }
}