import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BiblioAuthorRepository } from './biblio_author.repository';
import { Biblio_Author } from './biblio_author.entity';
import { CreateBiblioAuthorDto } from './dto/create-biblio-author.dto';

@Injectable()
export class BiblioAuthorsService {
    constructor(
        @InjectRepository(BiblioAuthorRepository)
        private BiblioAuthorRepository: BiblioAuthorRepository,
    ) { }

    async getBiblioAuthorsByBiblioId(biblio_id: number): Promise<Biblio_Author[]> {
        return this.BiblioAuthorRepository.getBiblioAuthorsByBiblioId(biblio_id);
    }

    async createBulkBiblioAuthor(createBulkBiblioAuthorDto: CreateBiblioAuthorDto[]): Promise<Biblio_Author[]> {
        return this.BiblioAuthorRepository.createBulkBiblioAuthor(createBulkBiblioAuthorDto);
    }

    async deleteBiblioAuthorByBiblioIdAndAuthorId(biblio_id: number, author_id: number): Promise<void> {
        return this.BiblioAuthorRepository.deleteBiblioAuthorByBiblioIdAndAuthorId(biblio_id, author_id);
    }
}