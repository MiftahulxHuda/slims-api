import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Language } from './mst_language.entity';

@EntityRepository(MST_Language)
export class MSTLanguageRepository extends Repository<MST_Language> {

    async getMSTLanguagesByLanguageName(language_name: string): Promise<MST_Language[]> {
        try {
            const query = await this.find({
                where: {
                    language_name: Like(`%${language_name ? language_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}