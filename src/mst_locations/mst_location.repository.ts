import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Location } from './mst_location.entity';

@EntityRepository(MST_Location)
export class MSTLocationRepository extends Repository<MST_Location> {

    async getMSTLocationsByLocationName(location_name: string): Promise<MST_Location[]> {
        try {
            const query = await this.find({
                where: {
                    location_name: Like(`%${location_name ? location_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}