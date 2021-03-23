import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Biblio_Author } from './biblio_author.entity';
import { CreateBiblioAuthorDto } from './dto/create-biblio-author.dto';

@EntityRepository(Biblio_Author)
export class BiblioAuthorRepository extends Repository<Biblio_Author> {

    async getBiblioAuthorsByBiblioId(biblio_id: number): Promise<Biblio_Author[]> {
        try {
            const query = await this.find({ where: { biblio_id: biblio_id } });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createBulkBiblioAuthor(createBulkBiblioAuthorDto: CreateBiblioAuthorDto[]): Promise<Biblio_Author[]> {
        let bulkBiblioAuthor: Biblio_Author[] = createBulkBiblioAuthorDto.map(item => {
            const biblioAuthor = new Biblio_Author();
            biblioAuthor.biblio_id = item.biblio_id;
            biblioAuthor.author_id = item.author_id;
            biblioAuthor.level = item.level;
            return biblioAuthor;
        });

        try {
            await this.save(bulkBiblioAuthor);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return bulkBiblioAuthor;
    }

    async deleteBiblioAuthorByBiblioIdAndAuthorId(biblio_id, author_id): Promise<void> {
        try {
            await this.delete({ biblio_id: biblio_id, author_id: author_id });
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}