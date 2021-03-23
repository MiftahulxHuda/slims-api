import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Media_Type } from './mst_media_type.entity';

@EntityRepository(MST_Media_Type)
export class MSTMediaTypeRepository extends Repository<MST_Media_Type> {

    async getMSTMediaTypesByMediaType(media_type: string): Promise<MST_Media_Type[]> {
        try {
            const query = await this.find({
                where: {
                    media_type: Like(`%${media_type ? media_type : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}