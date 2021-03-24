import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Item_Status } from './mst_item_status.entity';

@EntityRepository(MST_Item_Status)
export class MSTItemStatusRepository extends Repository<MST_Item_Status> {

    async getMSTItemStatusesByItemStatusName(item_status_name: string): Promise<MST_Item_Status[]> {
        try {
            const query = await this.find({
                where: {
                    item_status_name: Like(`%${item_status_name ? item_status_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}