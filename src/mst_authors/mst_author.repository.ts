import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Author } from './mst_author.entity';
import { CreateMSTAuthorDto } from './dto/create-mst-author.dto';

@EntityRepository(MST_Author)
export class MSTAuthorRepository extends Repository<MST_Author> {

    async getMSTAuthorsByName(author_name: string): Promise<MST_Author[]> {
        try {
            const query = await this.find({
                where: {
                    author_name: Like(`%${author_name ? author_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createMSTAuthor(createMSTAuthorDto: CreateMSTAuthorDto): Promise<MST_Author> {
        const { author_name, authority_type, input_date, last_update } = createMSTAuthorDto;

        const mst_author = new MST_Author();
        mst_author.author_name = author_name;
        mst_author.authority_type = authority_type;
        mst_author.input_date = input_date;
        mst_author.last_update = last_update;

        try {
            await this.save(mst_author);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return mst_author;
    }
}