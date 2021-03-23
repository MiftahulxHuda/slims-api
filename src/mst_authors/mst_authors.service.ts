import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTAuthorRepository } from './mst_author.repository';
import { MST_Author } from './mst_author.entity';
import { CreateMSTAuthorDto } from './dto/create-mst-author.dto';

@Injectable()
export class MSTAuthorsService {
    constructor(
        @InjectRepository(MSTAuthorRepository)
        private MSTAuthorRepository: MSTAuthorRepository,
    ) { }

    async getMSTAuthorsByName(author_name: string): Promise<MST_Author[]> {
        return this.MSTAuthorRepository.getMSTAuthorsByName(author_name);
    }

    async createMSTAuthor(createMSTAuthorDto: CreateMSTAuthorDto): Promise<MST_Author> {
        return this.MSTAuthorRepository.createMSTAuthor(createMSTAuthorDto);
    }
}