import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Content_Type } from './mst_content_type.entity';

@EntityRepository(MST_Content_Type)
export class MSTContentTypeRepository extends Repository<MST_Content_Type> {

    async getMSTContentTypesByContentType(content_type: string): Promise<MST_Content_Type[]> {
        try {
            const query = await this.find({
                where: {
                    content_type: Like(`%${content_type ? content_type : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}