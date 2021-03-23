import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Carrier_Type } from './mst_carrier_type.entity';

@EntityRepository(MST_Carrier_Type)
export class MSTCarrierTypeRepository extends Repository<MST_Carrier_Type> {

    async getMSTCarrierTypesByCarrierType(carrier_type: string): Promise<MST_Carrier_Type[]> {
        try {
            const query = await this.find({
                where: {
                    carrier_type: Like(`%${carrier_type ? carrier_type : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}