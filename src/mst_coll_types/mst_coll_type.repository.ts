import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Coll_Type } from './mst_coll_type.entity';

@EntityRepository(MST_Coll_Type)
export class MSTCollTypeRepository extends Repository<MST_Coll_Type> {

    async getMSTCollTypesByCollTypeName(coll_type_name: string): Promise<MST_Coll_Type[]> {
        try {
            const query = await this.find({
                where: {
                    coll_type_name: Like(`%${coll_type_name ? coll_type_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}