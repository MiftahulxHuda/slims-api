import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_GMD } from './mst_gmd.entity';

@EntityRepository(MST_GMD)
export class MSTGMDRepository extends Repository<MST_GMD> {

    async getMSTGMDsByName(gmd_name: string): Promise<MST_GMD[]> {
        try {
            const query = await this.find({
                where: {
                    gmd_name: Like(`%${gmd_name ? gmd_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}